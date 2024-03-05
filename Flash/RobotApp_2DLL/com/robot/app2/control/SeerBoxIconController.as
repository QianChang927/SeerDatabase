package com.robot.app2.control
{
   import com.robot.app.task.petstory.util.BtnClick;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.SeerBox.EmailListInfo;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.URLLoader;
   import flash.net.URLRequest;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import flash.utils.clearInterval;
   import flash.utils.clearTimeout;
   import flash.utils.setInterval;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import gs.easing.Linear;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class SeerBoxIconController
   {
      
      private static var _ui:MovieClip;
      
      private static var _curSprite:MovieClip;
      
      private static var timeOutValue1:uint = 0;
      
      private static var tw:TweenLite;
      
      private static var txtMask:Sprite;
      
      public static var showEmail:Boolean = false;
      
      private static var timeOutValue2:uint = 0;
      
      private static var _xmlLoader:URLLoader;
      
      private static var _xml:XML;
      
      private static var smallTvPanel:MovieClip;
      
      private static var isShowSmallTv:Boolean = false;
      
      private static var hasShowArr:Array;
      
      private static var timeOutValue:int = 0;
      
      private static var timeIntervalValue:int = 0;
       
      
      public function SeerBoxIconController()
      {
         super();
      }
      
      public static function get UI() : MovieClip
      {
         return _ui;
      }
      
      public static function setup() : void
      {
         ResourceManager.getResource(ClientConfig.getAppResource("update/SeerBox/SeerBoxIcon"),function(param1:MovieClip):void
         {
            _ui = param1;
            _ui.x = 409.3;
            _ui.y = 508.5;
            _ui.visible = true;
            ToolBarController.panel.addChild(_ui);
            _ui["gotoMail"].addEventListener(MouseEvent.CLICK,onIconClick,false,1);
            update();
         });
      }
      
      private static function mapChange(param1:MapEvent) : void
      {
         if(MapManager.currentMap.id == MainManager.actorID)
         {
            _ui.visible = false;
         }
         else
         {
            _ui.visible = true;
         }
      }
      
      public static function update() : void
      {
         updateDot();
      }
      
      public static function scrollTxt(param1:TextField, param2:Sprite) : void
      {
         if(param1 == null || param2 == null)
         {
            return;
         }
         param1.x = param2.x + param2.width;
         tw = new TweenLite(param1,4,{
            "x":param2.x - param1.width,
            "ease":Linear.easeIn
         });
         timeOutValue1 = setTimeout(scrollTxt,4000,param1,param2);
      }
      
      public static function onIconClick(param1:MouseEvent) : void
      {
         StatManager.sendStat2014("1213邮件系统改版","在工具条中点击【邮箱】按钮","2019运营活动");
         SocketConnection.send(CommandID.MAIL_IS_UNREAD);
         if(showEmail)
         {
            showEmail = false;
            ModuleManager.showAppModule("SeerEmailNewMainPanel");
         }
         else
         {
            ModuleManager.showAppModule("SeerEmailNewMainPanel");
         }
      }
      
      public static function hide() : void
      {
         if(_ui != null)
         {
            MapManager.removeEventListener(MapEvent.MAP_PROCESS_INIT,mapChange);
            if(_ui.parent)
            {
               _ui.parent.removeChild(_ui);
            }
            _ui = null;
         }
      }
      
      public static function updateDot() : void
      {
         if(_ui == null)
         {
            return;
         }
         _ui.visible = true;
         KTool.getBitSet([2000025,1000289,2000026],function(param1:Array):void
         {
            var _total:uint = 0;
            var _count:uint = 0;
            var _emailListArray:Array = null;
            var b:Array = param1;
            clearTimeout(timeOutValue1);
            if(tw != null)
            {
               tw.clear();
               tw = null;
            }
            _emailListArray = [];
            SocketConnection.sendWithCallback(CommandID.MAIL_LIST,function(param1:SocketEvent):void
            {
               var _loc5_:EmailListInfo = null;
               var _loc6_:int = 0;
               var _loc2_:ByteArray = param1.data as ByteArray;
               _total = _loc2_.readUnsignedInt();
               _count = _loc2_.readUnsignedInt();
               var _loc3_:uint = _loc2_.readUnsignedInt();
               var _loc4_:int = 0;
               while(_loc4_ < _loc3_)
               {
                  _loc5_ = new EmailListInfo(_loc2_);
                  _emailListArray.push(_loc5_);
                  _loc4_++;
               }
               if(_emailListArray[0] == null)
               {
                  _ui["uiDot"].visible = false;
               }
               else
               {
                  _loc6_ = 0;
                  while(_loc6_ <= _emailListArray.length - 1)
                  {
                     if(_emailListArray[_loc6_].status == false)
                     {
                        _ui["uiDot"].visible = true;
                        _ui["uiDot"]["NewMaiIconMcl"].gotoAndStop(1);
                        SocketConnection.send(CommandID.GET_OFFLINE_MSG);
                        return;
                     }
                     _ui["uiDot"].visible = false;
                     _loc6_++;
                  }
               }
               SocketConnection.send(CommandID.GET_OFFLINE_MSG);
            },1,50);
         });
      }
      
      public static function setupTv() : void
      {
         _xmlLoader = new URLLoader();
         _xmlLoader.addEventListener(Event.COMPLETE,loadSeerBoxXML);
         _xmlLoader.load(new URLRequest(ClientConfig.getAppResource("update/SeerBox/SeerBoxMsg",".xml")));
      }
      
      private static function loadSeerBoxXML(param1:Event) : void
      {
         _xmlLoader.removeEventListener(Event.COMPLETE,loadSeerBoxXML);
         _xml = new XML(param1.target.data);
         hasShowArr = new Array();
         var _loc2_:int = 1;
         while(_loc2_ <= _xml.loginBomb[0].btn.length())
         {
            hasShowArr.push(false);
            _loc2_++;
         }
         timeIntervalValue = setInterval(getNeedActivity,60 * 1000);
      }
      
      private static function getNeedActivity() : void
      {
         var _loc2_:String = null;
         var _loc3_:Array = null;
         var _loc4_:CronTimeVo = null;
         if(isShowSmallTv)
         {
            return;
         }
         var _loc1_:int = 1;
         while(_loc1_ <= _xml.loginBomb[0].btn.length())
         {
            _loc2_ = _xml.loginBomb[0].btn[_loc1_ - 1].@time;
            if(_loc2_ == "")
            {
               return;
            }
            _loc3_ = _loc2_.split(" ");
            if((_loc4_ = new CronTimeVo(_loc3_[0],_loc3_[1],_loc3_[2],_loc3_[3],_loc3_[4],_loc3_[5])).checkTimeHit(SystemTimerManager.sysBJDate) == CronTimeVo.HIT && !hasShowArr[_loc1_ - 1])
            {
               showTv(_loc1_);
               return;
            }
            _loc1_++;
         }
      }
      
      private static function showTv(param1:int) : void
      {
         var time:int = 0;
         var index:int = param1;
         isShowSmallTv = true;
         hasShowArr[index - 1] = true;
         if(smallTvPanel == null)
         {
            ResourceManager.getResource(ClientConfig.getAppResource("update/SeerBox/SeeSmallTV"),function(param1:MovieClip):void
            {
               smallTvPanel = param1;
               smallTvPanel.x = 571.55;
               smallTvPanel.y = 560;
               LevelManager.iconLevel.addChild(smallTvPanel);
               smallTvPanel["mc"].gotoAndStop(index);
               smallTvPanel.addEventListener(MouseEvent.CLICK,onTvClick);
               TweenLite.to(smallTvPanel,2,{"y":340.95});
               var _loc2_:int = int(_xml.loginBomb[0].btn[index - 1].@during);
               if(_loc2_ == 0)
               {
                  _loc2_ = 20;
               }
               timeOutValue = setTimeout(destoryTv,_loc2_ * 1000);
            });
         }
         else
         {
            smallTvPanel.visible = true;
            smallTvPanel.x = 571.55;
            smallTvPanel.y = 560;
            smallTvPanel["mc"].gotoAndStop(index);
            TweenLite.to(smallTvPanel,2,{"y":340.95});
            time = int(_xml.loginBomb[0].btn[index - 1].@during);
            if(time == 0)
            {
               time = 20;
            }
            timeOutValue = setTimeout(destoryTv,time * 1000);
         }
      }
      
      private static function onTvClick(param1:MouseEvent) : void
      {
         var _loc2_:int = 0;
         var _loc3_:String = null;
         var _loc4_:String = null;
         _loc2_ = int(smallTvPanel.mc.currentFrame);
         switch(param1.target.name)
         {
            case "btn":
               _loc3_ = _xml.loginBomb[0].btn[_loc2_ - 1].@url;
               _loc4_ = _xml.loginBomb[0].btn[_loc2_ - 1].@type;
               closeTv();
               BtnClick.go(_loc4_,_loc3_);
               break;
            case "close":
               closeTv();
         }
      }
      
      private static function closeTv() : void
      {
         if(smallTvPanel == null)
         {
            return;
         }
         clearTimeout(timeOutValue);
         smallTvPanel.visible = false;
      }
      
      private static function destoryTv() : void
      {
         clearTimeout(timeOutValue);
         clearInterval(timeIntervalValue);
         if(smallTvPanel == null)
         {
            return;
         }
         smallTvPanel.removeEventListener(MouseEvent.CLICK,onTvClick);
         if(smallTvPanel.parent != null)
         {
            smallTvPanel.parent.removeChild(smallTvPanel);
         }
         _xmlLoader = null;
         _xml = null;
      }
   }
}
