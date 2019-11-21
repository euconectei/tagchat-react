var App = {

  // variaveis
  BOSH_SERVICE: 'http://127.0.0.1:7070/http-bind',
  instanceId: '@conference.localhost',
  userInstanceId: '@localhost',
  room: 'teste',
  connection: null,
  usuario: null,
  imagemBytes: null,
  usuarios: {},
  restUrl: '',

  // métodos
  inicializar: function (boshUrl, sessionId, domain, roomName, restUrlWs) {
    App.BOSH_SERVICE = boshUrl;
    App.userInstanceId = '@' + domain;
    App.instanceId = '@' + sessionId + '.' + domain;
    App.connection = new Strophe.Connection(App.BOSH_SERVICE);
    App.room = roomName;
    App.restUrl = restUrlWs;

    // Uncomment the following lines to spy on the wire traffic.
    //	    App.connection.rawInput = function (data) { log('RECV: ' + data); };
    //	    App.connection.rawOutput = function (data) { log('SEND: ' + data); };

    // Uncomment the following line to see all the debug output.
    //	    Strophe.log = function (level, msg) { log('LOG: ' + msg); };


  },
  conectarAttach: function (jid, sid, rid) {
    App.usuario = jid;
    App.connection.attach(jid, sid, rid, App.onConnect);
  },

  conectar: function (usuario, senha, recurso) {
    App.usuario = usuario;

    var usr = usuario + App.userInstanceId;
    if (recurso) {
      usr += '/' + recurso;
    }

    App.connection.connect(usr, senha, App.onConnect);
  },
  desconectar: function () {
    App.connection.flush();
    App.connection.options.sync = true;
    App.connection.disconnect();
  },

  iniciaDigitacao: function (sala) {
    App.alteraEstado(sala, 'composing');
  },

  terminaDigitacao: function (sala) {
    App.alteraEstado(sala, 'active');
  },

  alteraEstado: function (sala, estado) {
    var msg = $msg({
      id: App.connection.getUniqueId(),
      from: App.usuario + App.instanceId,
      to: sala + App.instanceId,
      type: GROUP_CHAT
    }).c(estado, { xmlns: 'http://jabber.org/protocol/chatstates' });
    App.connection.send(msg.tree());
  },


  enviarMsg: function (texto, destino, tipo) {

    if (texto != null && texto.trim() != '') {
      var msg = $msg({ from: App.usuario + App.instanceId, to: destino + App.instanceId, type: tipo }).c('body').t(texto);
      App.connection.send(msg.tree());
      // utilizar apenas se for usar o método de vv (enviado ao servidor, estilo whatsapp)
      // Html.mensagem(msg.tree(), App.usuario, true);

      restMensagem(texto);
    }
  },
  adicionaUsuario: function (usuario, proprio) {

    requestImg(usuario);
    var usuarioCompleto = {
      jid: usuario,
      jidCompleto: usuario + App.instanceId,
      nickname: usuario,
      imageBytes: null,
      imageType: null
    };
    App.usuarios[usuario] = usuarioCompleto;
    Html.adicionaUsuario(usuarioCompleto, proprio);
  },
  removeUsuario: function (usuario) {
    Html.removeUsuario(usuario);
  },
  sairSala: function (sala, usuario) {
    var pres = $pres({
      from: usuario + App.userInstanceId + '/' + sala,
      type: 'unavailable'
    });
    App.connection.send(pres.tree(), function (ret) { }, function (err) { });
  },

  alteraTopico: function (sala, topico) {

    msg = $msg({
      id: App.connection.getUniqueId(),
      from: App.usuario + App.instanceId,
      to: sala + App.instanceId,
      type: GROUP_CHAT
    }).c('subject').t(topico);
    App.connection.send(msg.tree());

  },

  // tratadores
  onConnect: function (status, condition) {

    if (status == Strophe.Status.CONNECTING) {

    } else if (status == Strophe.Status.CONNFAIL) {

    } else if (status == Strophe.Status.DISCONNECTING) {

    } else if (status == Strophe.Status.DISCONNECTED) {

    } else if ((status == Strophe.Status.CONNECTED) || (status == Strophe.Status.ATTACHED)) {

      App.connection.addHandler(App.onPresence, null, 'presence');
      App.connection.addHandler(App.onMessageSingle, null, 'message', 'chat', null, null);
      App.connection.addHandler(App.onMessageGroup, null, 'message', GROUP_CHAT, null, null);

      App.connection.send($pres().c('priority').t('-1'));
      App.connection.send($pres({
        to: App.room + App.instanceId + '/' + App.usuario
      }).c('x', { xmlns: 'http://jabber.org/protocol/muc' }), function () { log('success'); }, function (err) { log('error', err); });


    }
    return true;

  },
  onPresence: function (pres) {

    var type = pres.getAttribute('type');
    var from = Strophe.getResourceFromJid(pres.getAttribute('from'));
    var x = pres.getElementsByTagName('x');
    if (type == null) {


      if ((x[0] != null)) {
        x[0].getElementsByTagName('item');
        if ((x[0].getElementsByTagName('status').length == 0)) {
          App.adicionaUsuario(from, false);
        } else {
          App.adicionaUsuario(from, true);
        }
      }
      // saindo da sala
    } else if (type == 'unavailable') {
      App.removeUsuario(from);
    }

    return true;
  },
  onMessageSingle: function (msg) {
    //		log('MSG ' + new XMLSerializer().serializeToString(msg));

    var to = msg.getAttribute('to');
    var from = msg.getAttribute('from');
    var elems = msg.getElementsByTagName('body');
    var body = elems[0];
    var usuario = Strophe.getResourceFromJid(from);


    Html.mensagem(msg, usuario, false);



    return true;
  },

  onMessageGroup: function (msg) {

    var to = msg.getAttribute('to');
    var from = msg.getAttribute('from');
    var elems = msg.getElementsByTagName('body');
    var body = elems[0];
    var usuario = Strophe.getResourceFromJid(from);
    var composing = msg.getElementsByTagName('composing');

    if (App.usuarios[usuario] && App.usuarios[usuario] != null) {
      if (composing.length > 0) {
        App.usuarios[usuario].digitando = true;
        Html.digitando(usuario);
      } else {
        App.usuarios[usuario].digitando = false;
        Html.fimDigitando(usuario);
      }
    }

    if (elems.length > 0) {
      Html.preScroll();
      Html.mensagem(msg, usuario, usuario == App.usuario);
      Html.posScroll();
    }


    return true;
  }
}