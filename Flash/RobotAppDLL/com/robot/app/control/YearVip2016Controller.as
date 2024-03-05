package com.robot.app.control
{
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.controller.NewSeerTaskController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class YearVip2016Controller
   {
      
      public static var _curYearForeverId:int = 125077;
      
      public static var isYearVip:Boolean;
      
      public static var isCurYearVip:Boolean;
      
      public static var numCurYearMonth:int;
      
      public static var _curYearrewardForeverId:int = 125078;
      
      public static const curYearVipMapId:int = 1652;
      
      public static const curYearVipMainAppName:String = "Yearvip2024MainPanel";
      
      public static const curYearVipPanels:Array = ["Yearvip2024GetRewardPanel","Yearvip2024YuyueGiftPanel","Yearvip2024LimitedcollectionPanel","Yearvip2024MouthGiftPanel","VipMouthPet2024Panel","Yearvip2024JpPanel","Yearvip2024ExclusivecapacityPanel"];
      
      public static const openAcId:int = 323;
      
      public static const curFullYear:int = 2024;
      
      private static var _ui:MovieClip;
      
      private static var utime:uint;
       
      
      public function YearVip2016Controller()
      {
         super();
      }
      
      public static function yearVipGofun(param1:Function = null, param2:String = "") : void
      {
         if(getDefinitionByName("com.robot.app2.control.ActivityTimeControl").getIsinTime(323))
         {
            if(param1 != null)
            {
               param1();
            }
            else
            {
               ModuleManager.showAppModule(YearVip2016Controller.curYearVipMainAppName);
            }
         }
         else if(param2 != "")
         {
            Alarm2.show(param2);
         }
         else
         {
            Alarm2.show(curFullYear + "全新年费将在1月1日开启，敬请期待！");
         }
      }
      
      public static function setup() : void
      {
         SocketConnection.addCmdListener(CommandID.VIP_CO,updateVip);
         requestinfo();
         if(NewSeerTaskController.isNewSeer)
         {
            return;
         }
         var _loc1_:SharedObject = _loc1_ = SOManager.getUserSO(SOManager.ACTIVITY);
         if(_loc1_.data["Yearvip2018_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)])
         {
            return;
         }
      }
      
      public static function updateVip(param1:SocketEvent) : void
      {
         var event:SocketEvent = param1;
         KTool.socketSendCallBack(46066,function():void
         {
            requestinfo();
         });
      }
      
      public static function requestinfo(param1:Function = null) : void
      {
         var fun:Function = param1;
         SocketConnection.sendByQueue(45824,[0],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            var _loc3_:int = int(_loc2_.readUnsignedInt());
            var _loc4_:* = _loc3_ == 1;
            isCurYearVip = isYearVip = _loc4_;
            numCurYearMonth = _loc2_.readUnsignedInt();
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function urlToVip(param1:Function = null) : void
      {
         var fun:Function = param1;
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4,"2",function():void
         {
            requestinfo(fun);
         });
      }
      
      public static function urltoVipYear(param1:Function = null) : void
      {
         var fun:Function = param1;
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4_0,"2",function():void
         {
            requestinfo(fun);
         });
      }
      
      public static function loadUI() : void
      {
         var onClick:Function = null;
         var onRemove:Function = null;
         onClick = function(param1:MouseEvent):void
         {
            var _loc2_:SharedObject = _loc2_ = SOManager.getUserSO(SOManager.ACTIVITY);
            _loc2_.data["Yearvip2018_" + SystemTimerManager.getDateString(SystemTimerManager.sysBJDate)] = true;
            _loc2_.flush();
            switch(param1.target.name)
            {
               case "go":
                  onRemove(null);
                  ModuleManager.showAppModule("Yearvip2018MainPanel");
                  break;
               case "closeBtn":
                  onRemove(null);
                  break;
               case "vipBtn":
                  urltoVipYear();
                  onRemove(null);
            }
         };
         onRemove = function(param1:Event = null):void
         {
            clearTimeout(utime);
            _ui.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_ui);
         };
         ResourceManager.getResource(ClientConfig.getAppResource("2018/1229/yearvip2019ui"),function(param1:MovieClip):void
         {
            _ui = param1;
            LevelManager.toolsLevel.addChild(_ui);
            _ui.addEventListener(MouseEvent.CLICK,onClick);
            utime = setTimeout(onRemove,1000 * 60);
         });
      }
   }
}
