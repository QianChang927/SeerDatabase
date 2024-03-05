package com.robot.app.linkManager
{
   import com.robot.app.panel.VideoPanelMananger;
   import com.robot.app.systems.VipSession;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.ReChargeAlert;
   import flash.events.Event;
   import flash.external.ExternalInterface;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import org.taomee.events.SocketEvent;
   
   public class LinkToUrlManager
   {
      
      public static const LINK_TYPE_1:String = "http://pay.61.com/account/pwd?userid=";
      
      public static const LINK_TYPE_2:String = "http://pay.61.com/buy/payType?type=alipay&game=seer&userid=";
      
      public static const LINK_TYPE_3:String = "http://pay.61.com/saler/defaultSalers?game=seer&userid=";
      
      public static const LINK_TYPE_4:String = "http://pay.61.com/nono/nonoPay?game=seer&userid=";
      
      public static const LINK_TYPE_4_0:String = "http://pay.61.com/nono/mbaccount?game=seer&userid=";
      
      public static const LINK_TYPE_5:String = "http://pay.61.com/account/myAccount?userid=";
      
      public static const LINK_TYPE_6:String = "http://account.61.com/protect?userid=";
      
      public static const LINK_TYPE_7:String = "http://pay.61.com/buy/paytype?type=cardpay";
      
      public static const LINK_TYPE_8:String = "http://pay.61.com/service/nonoservice";
      
      public static const LINK_TYPE_9:String = "http://pay.61.com/award/";
      
      public static const LINK_TYPE_10:String = "http://event.2125.com/seerfilm/?userid=";
      
      public static const LINK_TYPE_11:String = "http://account.61.com/change?userid=";
      
      public static const LINK_TYPE_12:String = "http://pay.61.com/nonof/nonopay?";
      
      public static const LINK_TYPE_13:String = "http://v.61.com/51seer/?";
      
      public static const LINK_TYPE_14:String = "http://v.61.com/51seer/question.html?";
      
      public static const LINK_TYPE_15:String = "http://v.51seer.com/51seer/?";
      
      public static const LINK_TYPE_16:String = "http://v.51seer.com/51seer/question.html?";
      
      public static const LINK_TYPE_17:String = "http://service.61.com/user/getQuestionByGame?";
      
      public static const LINK_TYPE_18:String = "http://account.61.com/forget?uid=";
      
      public static const LINK_TYPE_19:String = "http://bbs.61.com/checksession/";
      
      public static const LINK_TYPE_20:String = "http://event.2125.com/as_ad/checksession?";
      
      public static const LINK_TYPE_21:String = "http://webevent.61.com/sc_event/checksession?";
      
      public static const LINK_TYPE_JINGLINGPAI_AUTOSIGN:String = "http://jl.61.com?";
      
      public static const LINK_TYPE_SEER_MOBILE_AUTOSIGN:String = "http://s.61.com/?";
      
      public static const ACCOUNT_SECURITY_BINDING:String = "account_security_binding";
      
      public static const TM_DC_SURVEY:String = "tm_dc_survey";
      
      public static const LINK_TYPE_22:String = "http://event.2125.com/general/game_dq?id=3&";
      
      public static const LINK_TYPE_23:String = "http://account.61.com/protect/show_set_self?userid=";
      
      public static const LINK_TYPE_24:String = "http://account.61.com/protect/show_set_question?userid=";
      
      public static const LINK_TYPE_25:String = "http://account.61.com/protect/show_set_email?userid=";
      
      public static const LINK_TYPE_26:String = "http://account.61.com/protect/show_set_phone?userid=";
      
      public static const LINK_TYPE_27:String = "http://account.61.com/protect/show_set_mmk?userid=";
      
      public static const LINK_TYPE_30:String = "http://account.61.com/user/getVerify?userid=";
      
      public static const LINK_TYPE_28:String = "http://webevent.61.com/common/game_dq_page?id=1&uid=";
      
      public static const LINK_TYPE_29:String = "http://bbs.61.com/checksession/?username=";
      
      public static const LINK_TYPE_31:String = "http://account.61.com/protect/show_set_mmk?userid=";
      
      public static const GF:String = "http://gf.61.com";
      
      private static var _canLink:Boolean = true;
      
      private static var _curType:String;
      
      private static var _gameId:String;
      
      private static var _session:VipSession = new VipSession();
      
      private static var ignoreCommand:Boolean = false;
      
      public static var userIDArray:Array = [];
      
      private static var _fun:Function;
       
      
      public function LinkToUrlManager()
      {
         super();
      }
      
      public static function linkUrl(param1:String, param2:String = "2", param3:Function = null) : void
      {
         var _loc4_:* = null;
         var _loc5_:String = null;
         var _loc6_:Array = null;
         var _loc7_:int = 0;
         var _loc8_:String = null;
         if(MainManager.visitor)
         {
            Alarm.show("亲爱的小赛尔，\"游客模式\"下无法进行消费哦！");
            return;
         }
         if(_canLink)
         {
            _canLink = false;
            _curType = param1;
            _gameId = param2;
            switch(param1)
            {
               case LINK_TYPE_12:
                  _loc5_ = _curType + "&session=" + MainManager.sessionKey + "&userid=" + MainManager.actorID + "&gameid=" + _gameId + "&fuserid=" + userIDArray.shift();
                  checkOpenUrl(_loc5_);
                  _canLink = true;
                  break;
               case LINK_TYPE_13:
               case LINK_TYPE_15:
                  _session.addEventListener(VipSession.GET_SESSION,onGetVideoSession);
                  _session.getSession(154);
                  break;
               case LINK_TYPE_14:
               case LINK_TYPE_16:
                  _session.addEventListener(VipSession.GET_SESSION,onGetQuesSession);
                  _session.getSession(154);
                  break;
               case LINK_TYPE_19:
                  _loc4_ = _curType + "?username=" + MainManager.actorID + "&gid=" + _gameId + "&session=" + MainManager.sessionKey + "&fid=36";
                  checkOpenUrl(_loc4_);
                  _canLink = true;
                  break;
               case LINK_TYPE_29:
                  _loc4_ = _curType + MainManager.actorID + "&gid=" + _gameId + "&session=" + MainManager.sessionKey + "&fid=36&tid=322925";
                  checkOpenUrl(_loc4_);
                  _canLink = true;
                  break;
               case LINK_TYPE_20:
                  _loc4_ = _curType + "from_gid=" + _gameId + "&uid=" + MainManager.actorID + "&tad=" + "innermewnadia.seer.free.ingame_news" + "&sessionid=" + MainManager.sessionKey;
                  navigateToURL(new URLRequest(_loc4_),"_blank");
                  _canLink = true;
                  break;
               case LINK_TYPE_21:
                  _loc4_ = _curType + "from_gid=" + _gameId + "&uid=" + MainManager.actorID + "&sessionid=" + MainManager.sessionKey + "&tad=" + "innermewnadia.seer.free.ingame_news";
                  navigateToURL(new URLRequest(_loc4_),"_blank");
                  _canLink = true;
                  break;
               case LINK_TYPE_22:
                  _loc4_ = _curType + "?uid=" + MainManager.actorID + "&from_gid=" + _gameId + "&sid=" + MainManager.sessionKey;
                  navigateToURL(new URLRequest(_loc4_),"_blank");
                  _canLink = true;
                  break;
               case LINK_TYPE_28:
                  _loc4_ = _curType + MainManager.actorID + "&from_gid=" + _gameId + "&sid=" + MainManager.sessionKey;
                  navigateToURL(new URLRequest(_loc4_),"_blank");
                  _canLink = true;
                  break;
               case GF:
                  _loc4_ = _curType + "?sid=" + MainManager.sessionKey + "&uid=" + MainManager.actorID + "&fromGameId=" + _gameId;
                  navigateToURL(new URLRequest(_loc4_),"_blank");
                  _canLink = true;
                  break;
               case LINK_TYPE_18:
               default:
                  if(param1 == LINK_TYPE_4 || param1 == LINK_TYPE_4_0)
                  {
                     if(param1 == LINK_TYPE_4)
                     {
                        SocketConnection.send(1022,86055424);
                     }
                     if(param1 == LINK_TYPE_4_0)
                     {
                        SocketConnection.send(1022,86055425);
                     }
                     _loc6_ = ["Yearvip2023MainPanel","NewVIPEquityPanel","MonthlyPetInSeptember2023Panel"];
                     _loc7_ = 0;
                     while(_loc7_ < _loc6_.length)
                     {
                        _loc8_ = String(ClientConfig.getAppModule(_loc6_[_loc7_]));
                        if(ModuleManager.hasModule(_loc8_))
                        {
                           ModuleManager.hideModule(_loc8_);
                           ModuleManager.destroy(_loc8_);
                        }
                        _loc7_++;
                     }
                     ModuleManager.showAppModule("SdkVipBuyPanel");
                     _canLink = true;
                     return;
                  }
                  _loc4_ = _curType + MainManager.actorID + "&session=" + MainManager.sessionKey + "&gameid=" + _gameId;
                  checkOpenUrl(_loc4_);
                  _canLink = true;
                  if(param1 == LINK_TYPE_4)
                  {
                     SocketConnection.send(1022,86055424);
                     ReChargeAlert.type = 1;
                     ReChargeAlert.show(param3);
                  }
                  else if(param1 == LINK_TYPE_4_0)
                  {
                     SocketConnection.send(1022,86055425);
                     ReChargeAlert.show(param3);
                  }
                  else if(param1 == LINK_TYPE_2)
                  {
                     SocketConnection.send(1022,86055426);
                     ReChargeAlert.show(param3);
                  }
                  break;
            }
         }
      }
      
      public static function linkUrlTo(param1:String, param2:String, param3:String = "2") : void
      {
         var url:String = null;
         var type:String = param1;
         var param:String = param2;
         var gameId:String = param3;
         if(MainManager.visitor)
         {
            Alarm.show("亲爱的小赛尔，\"游客模式\"下无法进行消费哦！");
            return;
         }
         if(_canLink)
         {
            _canLink = false;
            _curType = type;
            _gameId = gameId;
            switch(type)
            {
               case ACCOUNT_SECURITY_BINDING:
                  if(["self","email","question","mmk","phone"].indexOf(param) == -1)
                  {
                     break;
                  }
                  url = KTool.formatString("http://account.61.com/protect/show_set_{0}?userid={1}&gameid={2}&session={3}",param,MainManager.actorID,_gameId,MainManager.sessionKey);
                  break;
               case TM_DC_SURVEY:
                  url = KTool.formatString("http://dc.61.com/Question/realQ?qn_id={0}&session={1}&gameid={2}&userid={3}",param,MainManager.sessionKey,_gameId,MainManager.actorID);
                  break;
               case LINK_TYPE_JINGLINGPAI_AUTOSIGN:
                  _session.getSession(2,function():void
                  {
                     url = KTool.formatString("http://jl.61.com/?sid={0}&uid={1}&fromGameId={2}",MainManager.sessionKey,MainManager.actorID,_gameId);
                     checkOpenUrl(url);
                     _canLink = true;
                  });
                  return;
               case LINK_TYPE_SEER_MOBILE_AUTOSIGN:
                  _session.getSession(657,function():void
                  {
                     url = KTool.formatString("http://s.61.com/?gid={0}&uid={1}&sid={2}&from=seer",657,MainManager.actorID,MainManager.sessionKey);
                     checkOpenUrl(url);
                     _canLink = true;
                  });
                  return;
            }
            checkOpenUrl(url);
            _canLink = true;
         }
      }
      
      public static function linkToHelpNonoPage() : void
      {
         ignoreCommand = true;
         linkUrl(LINK_TYPE_12);
      }
      
      private static function onGetFriendSession(param1:Event) : void
      {
         _session.removeEventListener(VipSession.GET_SESSION,onGetFriendSession);
         if(ignoreCommand)
         {
            openUrlPage(null);
            ignoreCommand = false;
         }
         else
         {
            SocketConnection.addCmdListener(CommandID.DO_HELP_MESSAGE,openUrlPage);
            SocketConnection.send(CommandID.DO_HELP_MESSAGE,userIDArray[0]);
         }
      }
      
      private static function openUrlPage(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.GET_HELP_LIST,openUrlPage);
         var _loc2_:* = _curType + "&session=" + _session.key + "&userid=" + MainManager.actorID + "&gameid=" + _gameId + "&fuserid=";
         if(ignoreCommand == false)
         {
            _loc2_ += userIDArray.shift();
         }
         checkOpenUrl(_loc2_);
         _canLink = true;
      }
      
      private static function onGetVideoSession(param1:Event) : void
      {
         _session.removeEventListener(VipSession.GET_SESSION,onGetVideoSession);
         var _loc2_:String = _curType + "&uid=" + MainManager.actorID + "&session=" + _session.key;
         VideoPanelMananger.instance.showMainVideo(_loc2_);
         _canLink = true;
      }
      
      private static function onGetQuesSession(param1:Event) : void
      {
         _session.removeEventListener(VipSession.GET_SESSION,onGetQuesSession);
         var _loc2_:String = _curType + "&uid=" + MainManager.actorID + "&session=" + _session.key;
         VideoPanelMananger.instance.showQAPanel(_loc2_);
         _canLink = true;
      }
      
      private static function onGetSessionComHandler(param1:Event) : void
      {
         _session.removeEventListener(VipSession.GET_SESSION,onGetSessionComHandler);
         var _loc2_:String = _curType + MainManager.actorID + "&session=" + _session.key + "&gameid=" + _gameId;
         checkOpenUrl(_loc2_);
         _canLink = true;
      }
      
      public static function getSession(param1:Function = null, param2:uint = 2) : void
      {
         _fun = param1;
         _session = new VipSession();
         _session.addEventListener(VipSession.GET_SESSION,onGetComHandler);
         _session.getSession(param2);
      }
      
      private static function onGetComHandler(param1:Event) : void
      {
         _session.removeEventListener(VipSession.GET_SESSION,onGetComHandler);
         if(_fun != null)
         {
            _fun(_session.key);
         }
      }
      
      public static function noSessionLink(param1:String) : void
      {
         checkOpenUrl(param1);
      }
      
      private static function checkOpenUrl(param1:String) : void
      {
         var req:URLRequest = null;
         var url:String = param1;
         req = new URLRequest(url);
         try
         {
            if(ExternalInterface.available)
            {
               ExternalInterface.call("eval","window.open(\'" + url + "\',\'" + "_blank" + "\')");
            }
            else
            {
               navigateToURL(req,"_blank");
            }
         }
         catch(e:Error)
         {
            navigateToURL(req,"_blank");
         }
      }
      
      public static function openWeUrl(param1:String) : void
      {
         var _loc2_:URLRequest = new URLRequest(param1);
         navigateToURL(_loc2_,"_blank");
         if(ExternalInterface.available)
         {
            ExternalInterface.call("openWeUrl","",param1);
         }
      }
   }
}
