package com.robot.app
{
   import com.adobe.crypto.MD5;
   import com.robot.app.cmd.OfflineExpCmdListener;
   import com.robot.app.cmd.SysMsgCmdListener;
   import com.robot.app.control.DangerLoginController;
   import com.robot.core.CommandID;
   import com.robot.core.cmd.ChatCmdListener;
   import com.robot.core.cmd.FriendsNoticeCmdListener;
   import com.robot.core.cmd.InformCmdListener;
   import com.robot.core.cmd.team.TeamInformCmdListener;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.ServerConfig;
   import com.robot.core.config.UpdateConfig;
   import com.robot.core.controller.SaveUserInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.group.point.MapSeatPointConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.LoadingManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.RelationManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.manager.VersionManager;
   import com.robot.core.manager.map.config.MapConfig;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.Loader;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.SecurityErrorEvent;
   import flash.external.ExternalInterface;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.system.Capabilities;
   import flash.ui.ContextMenu;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.getTimer;
   import flash.utils.setTimeout;
   import org.taomee.bean.BeanManager;
   import org.taomee.component.manager.MComponentManager;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketErrorEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.TaomeeManager;
   import org.taomee.manager.TickManager;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.StringUtil;
   
   public class MainEntry
   {
      
      private static var _isDeputize:Boolean;
      
      private static var _loginIP:String;
      
      private static var _loginPort:uint;
      
      private static var _socketTimeOut:int;
       
      
      public function MainEntry()
      {
         super();
      }
      
      public static function setXML(param1:XML, param2:XML, param3:XML, param4:XML) : void
      {
         ClientConfig.setup(param1);
         ServerConfig.setup(param2);
         UpdateConfig.setup(param3);
         BeanManager.config(param4);
      }
      
      public static function setConfig(param1:Loader, param2:Object, param3:int, param4:uint) : void
      {
         LoadingManager.setup(param1);
         VersionManager.setup(param2);
         MainManager.cdnSpeed = param3;
         MainManager.serverID = param4;
      }
      
      public static function setup(param1:Sprite, param2:String, param3:uint, param4:uint, param5:ByteArray, param6:ByteArray, param7:Boolean, param8:String, param9:String, param10:Boolean, param11:Boolean, param12:Object, param13:ContextMenu, param14:Object) : void
      {
         var sprite:Sprite = param1;
         var ip:String = param2;
         var port:uint = param3;
         var userID:uint = param4;
         var session:ByteArray = param5;
         var relData:ByteArray = param6;
         var isSave:Boolean = param7;
         var pass:String = param8;
         var cdnIp:String = param9;
         var isDebug:Boolean = param10;
         var isNewUser:Boolean = param11;
         var dangerLogin:Object = param12;
         var menu:ContextMenu = param13;
         var loginIDInfo:Object = param14;
         MainManager.start = getTimer();
         MComponentManager.setup(sprite,14,"Tahoma");
         TaomeeManager.setup(sprite,sprite.stage);
         TaomeeManager.stageWidth = 960;
         TaomeeManager.stageHeight = 560;
         LevelManager.setup(sprite);
         MainManager.actorID = userID;
         MainManager.cdnIP = cdnIp;
         MainManager.ip = ip;
         MainManager.port = port;
         MainManager.session = session;
         MainManager.password = pass;
         MainManager.isDebug = isDebug;
         MainManager.isNewUser = isNewUser;
         MainManager.contextMenu = menu;
         SaveUserInfo.loginIDInfo = loginIDInfo;
         DangerLoginController.setup(dangerLogin);
         ClassRegister.setup();
         TickManager.setup();
         RelationManager.init(relData);
         SocketConnection.mainSocket.userID = userID;
         SocketConnection.mainSocket.ip = ip;
         SocketConnection.mainSocket.port = port;
         _loginIP = ip;
         _loginPort = port;
         new OfflineExpCmdListener().start();
         new ChatCmdListener().start();
         new InformCmdListener().start();
         SysMsgCmdListener.getInstance().start();
         new TeamInformCmdListener().start();
         new FriendsNoticeCmdListener().start();
         SaveUserInfo.isSave = isSave;
         SocketConnection.mainSocket.addEventListener(Event.CONNECT,onSocketConnect);
         SocketConnection.mainSocket.addEventListener(SecurityErrorEvent.SECURITY_ERROR,onSocketSecurity);
         try
         {
            _socketTimeOut = setTimeout(onSocketTimeOut,6000);
            SocketConnection.mainSocket.connect(ip,port);
         }
         catch(e:SecurityError)
         {
            onSocketSecurity(null);
         }
      }
      
      private static function onSocketTimeOut() : void
      {
         onSocketSecurity(null);
      }
      
      private static function onSocketConnect(param1:Event) : void
      {
         var _loc2_:ByteArray = null;
         if(MainManager.isNewUser)
         {
            StatManager.sendStat2014("_newtrans_","fSocketOnline","");
         }
         clearTimeout(_socketTimeOut);
         SocketConnection.mainSocket.removeEventListener(Event.CONNECT,onSocketConnect);
         SocketConnection.mainSocket.removeEventListener(SecurityErrorEvent.SECURITY_ERROR,onSocketSecurity);
         SocketConnection.mainSocket.addEventListener(Event.CLOSE,onSocketClose);
         if(_isDeputize)
         {
            _loc2_ = new ByteArray();
            _loc2_.writeShort(_loginPort);
            SocketConnection.send(CommandID.EXTEND,StringUtil.ipToBytes(_loginIP),_loc2_);
         }
         if(ExternalInterface.available)
         {
            MainManager.tad = ExternalInterface.call("getAd");
         }
         if(MainManager.isNewUser)
         {
            StatManager.sendStat2014("_newtrans_","fSend1001Req","");
         }
         SocketConnection.addCmdListener(CommandID.LOGIN_IN,onLogin);
         SocketConnection.send(CommandID.LOGIN_IN,MainManager.session,MainManager.getTopLeftTmcid(),SaveUserInfo.loginIDInfo.loginType,SaveUserInfo.loginIDInfo.loginDevice,SaveUserInfo.loginIDInfo.visitType,SaveUserInfo.loginIDInfo.channelId);
         SocketConnection.mainSocket.addEventListener(SocketErrorEvent.ERROR,onError);
      }
      
      private static function onSocketSecurity(param1:SecurityErrorEvent) : void
      {
         if(_isDeputize)
         {
            return;
         }
         _isDeputize = true;
         clearTimeout(_socketTimeOut);
         SocketConnection.mainSocket.addEventListener(Event.CONNECT,onSocketConnect);
         SocketConnection.mainSocket.addEventListener(SecurityErrorEvent.SECURITY_ERROR,onSocketSecurity);
         SocketConnection.mainSocket.connect(ClientConfig.deputizeIP,ClientConfig.deputizePort);
      }
      
      private static function onSocketClose(param1:Event) : void
      {
         var event:Event = param1;
         DebugTrace.show("////////////////////////////////////////////////////////////////////////////////\r//\r//\t\t\t\t" + "socket was closed\r//\r////////////////////////////////////////////////////////////////////////////////");
         try
         {
            SocketConnection.mainSocket.removeEventListener(Event.CLOSE,onSocketClose);
            Alarm.show("此次连接已经断开，请重新登陆",function():void
            {
               navigateToURL(new URLRequest("http://seer.61.com"),"_self");
            },false,true,false,LevelManager.stage);
         }
         catch(e:Error)
         {
         }
      }
      
      private static function onLogin(param1:SocketEvent) : void
      {
         if(SaveUserInfo.loginIDInfo.loginType == 3)
         {
            StatManager.sendStat2014("手机验证码注册/登录","【手机验证码登录玩家】登录ONLINE服","手机验证码");
         }
         if(MainManager.isNewUser)
         {
            StatManager.sendStat2014("_newtrans_","fOnlineSucc","");
         }
         SocketConnection.removeCmdListener(CommandID.LOGIN_IN,onLogin);
         EventManager.addEventListener(RobotEvent.CREATED_ACTOR,onCreatedActor);
         MainManager.setup(param1.data);
         var _loc2_:ByteArray = param1.data as ByteArray;
         var _loc3_:int = int(_loc2_.readUnsignedInt());
         initKey(_loc3_);
         MapConfig.setup();
         MapSeatPointConfig.setup();
         sendSystemInfo();
         SocketConnection.send(1022,86066824);
      }
      
      private static function sendSystemInfo() : void
      {
         var _loc1_:ByteArray = new ByteArray();
         while(_loc1_.length < 200)
         {
            _loc1_.writeUTFBytes("0");
         }
         var _loc2_:String = "";
         _loc2_ = Capabilities.version;
         _loc1_.writeUTFBytes(_loc2_);
         while(_loc1_.length < 250)
         {
            _loc1_.writeUTFBytes("0");
         }
         SocketConnection.send(CommandID.USER_SYSTEM_INFO,_loc1_);
      }
      
      private static function onCreatedActor(param1:RobotEvent) : void
      {
         EventManager.removeEventListener(RobotEvent.CREATED_ACTOR,onCreatedActor);
         ToolTipManager.setup(UIManager.getSprite("Tooltip_Background"));
         SaveUserInfo.saveSo();
         RelationManager.setup();
      }
      
      private static function onError(param1:SocketErrorEvent) : void
      {
         if(param1.headInfo == null)
         {
            ParseSocketError.parse(1,0);
         }
         else
         {
            ParseSocketError.parse(param1.headInfo.result,param1.headInfo.cmdID);
         }
      }
      
      private static function initKey(param1:int) : void
      {
         var _loc2_:String = "c&o&m.--rob-ot.c--o-r-e.&n-et.S-oc-ke-t&C-on-n-e-c-t-i-on";
         var _loc3_:* = "s*e*tE&&&n*c";
         _loc3_ += "r*yp*t&&&&Ke*yS*tr*i&n&&g*Arr";
         _loc2_ = String(StringUtil.replace(_loc2_,"-",""));
         _loc2_ = String(StringUtil.replace(_loc2_,"&",""));
         _loc3_ = String(StringUtil.replace(_loc3_,"*",""));
         _loc3_ = String(StringUtil.replace(_loc3_,"&",""));
         param1 ^= MainManager.actorInfo.userID;
         var _loc4_:String = String(MD5.hash(param1 + ""));
         var _loc5_:* = MainManager.actorInfo.userID + "";
         var _loc6_:Array = [];
         var _loc7_:int = 0;
         while(_loc7_ < 10)
         {
            _loc6_[_loc7_] = "*" + _loc4_.charAt(_loc7_) + "*";
            _loc7_++;
         }
         getDefinitionByName(_loc2_)[_loc3_](_loc6_);
      }
   }
}
