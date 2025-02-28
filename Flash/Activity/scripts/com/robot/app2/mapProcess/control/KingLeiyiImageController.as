package com.robot.app2.mapProcess.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.utilClass.ActivityXMLInfo;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class KingLeiyiImageController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _isPlaying:Boolean;
      
      private static var _activityXml:ActivityXMLInfo;
      
      private static var _isGot:Boolean;
      
      private static var _animateMc:MovieClip;
      
      private static var _taskState:int;
      
      private static var _animatesignMc:MovieClip;
       
      
      public function KingLeiyiImageController()
      {
         super();
      }
      
      public static function destroy() : void
      {
         _map.btnLevel.removeEventListener(MouseEvent.CLICK,onClick);
         _map = null;
         if(_taskState >= 32767)
         {
            DisplayUtil.removeForParent(_animateMc);
            _animateMc = null;
            _activityXml = null;
            DisplayUtil.removeForParent(_animatesignMc);
            _animatesignMc = null;
         }
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         _map.btnLevel.addEventListener(MouseEvent.CLICK,onClick);
         KTool.getMultiValue([100495,18040],function(param1:Array):void
         {
            var arr:Array = param1;
            if(_animateMc == null && _taskState < 32767)
            {
               _taskState = arr[1];
               loadAnimate(function():void
               {
                  _activityXml = new ActivityXMLInfo("2016/0527/KingLeiyiImage_Dialog",_animateMc);
                  loadAnimateForSign();
               });
            }
         });
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(_isPlaying || e.target.name != "doorBtn")
         {
            return;
         }
         StatManager.sendStat2014("0527艾尔的偶像梦","点击场景中的传送阵","2016运营活动");
         KTool.getMultiValue([100495,18040],function(param1:Array):void
         {
            var _loc2_:* = false;
            _taskState = param1[1];
            if(param1[1] >= 32767)
            {
               Alarm.show("你等了很久，但是并没有人出现。看来今天不会再有人来了哦，明天再来看看吧！");
               return;
            }
            var _loc3_:int = 0;
            var _loc4_:Array = [];
            var _loc5_:int = 0;
            while(_loc5_ < 15)
            {
               _isGot = KTool.getBit(param1[0],_loc5_ + 1) == 0;
               if(_loc5_ < 7)
               {
                  _loc2_ = _isGot || KTool.getBit(param1[1],_loc5_ + 1) == 0;
               }
               else
               {
                  _loc2_ = KTool.getBit(param1[1],_loc5_ + 1) == 0;
               }
               if(_loc2_)
               {
                  _loc4_.push(_loc5_);
               }
               _loc5_++;
            }
            _loc3_ = int(Math.random() * _loc4_.length + 1);
            _loc3_ = _loc4_.length > _loc3_ ? int(_loc4_[_loc3_]) : int(_loc4_[0]);
            _isGot = KTool.getBit(param1[0],_loc3_ + 1) == 0;
            playTask(_loc3_ + 1);
         });
      }
      
      private static function getGift(param1:int) : void
      {
         var i:int = param1;
         BonusController.addDelay(1930);
         SocketConnection.sendByQueue(42259,[_isGot && i <= 7 ? 1 : 3,i],function(param1:SocketEvent):void
         {
            SocketConnection.sendByQueue(42259,[2,i]);
            if(_isGot && i <= 7)
            {
               showAnimate(i);
            }
            else
            {
               BonusController.showDelayBonus(1930);
            }
         });
      }
      
      private static function loadAnimateForSign() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("KingLeiyiImageSign_mapAnimate"),function(param1:MovieClip):void
         {
            _animatesignMc = param1;
         });
      }
      
      public static function showAnimate(param1:int) : void
      {
         var i:int = param1;
         _animatesignMc.gotoAndStop(i);
         _map.conLevel.addChild(_animatesignMc);
         _map.btnLevel.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            var e:Event = param1;
            _animatesignMc.visible = true;
            _map.btnLevel.removeEventListener(Event.ENTER_FRAME,arguments.callee);
            AnimateManager.playMcEndHandler(_animatesignMc.mc,function():void
            {
               _animatesignMc.visible = false;
               DisplayUtil.removeForParent(_animatesignMc);
               BonusController.showDelayBonus(1930);
            });
         });
      }
      
      private static function loadAnimate(param1:Function) : void
      {
         var func:Function = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("KingLeiyiImage_mapAnimate"),function(param1:MovieClip):void
         {
            _animateMc = param1;
            if(func != null)
            {
               func();
            }
         });
      }
      
      private static function playTask(param1:int) : void
      {
         var callBack:Function = null;
         var i:int = param1;
         callBack = function():void
         {
            _isPlaying = false;
            if(i > 0 && i <= 7 || i >= 12 && i < 16)
            {
               getGift(i);
            }
            switch(i)
            {
               case 8:
               case 9:
               case 10:
                  FightManager.fightNoMapBoss("",7118 + i,false,true,function():void
                  {
                     if(FightManager.isWin)
                     {
                        getGift(i);
                        playTask(i * 2);
                     }
                     else
                     {
                        SocketConnection.sendByQueue(42259,[2,i]);
                        playTask(i * 2 + 1);
                     }
                     MapManager.currentMap.controlLevel.addChild(_animateMc);
                  });
                  break;
               case 11:
                  MapManager.currentMap.controlLevel.addChild(_animateMc);
                  _activityXml.playStory(22,function():void
                  {
                     Alert.show("你确定要借100000赛尔豆给这只圣光火鸟吗？",function():void
                     {
                        KTool.doExchange(8943,function():void
                        {
                           SocketConnection.sendByQueue(42259,[2,11]);
                           playTask(23);
                           MapManager.currentMap.controlLevel.addChild(_animateMc);
                        });
                     },function():void
                     {
                        FightManager.fightNoMapBoss("",7129,false,true,function():void
                        {
                           if(FightManager.isWin)
                           {
                              getGift(i);
                              playTask(24);
                           }
                           else
                           {
                              SocketConnection.sendByQueue(42259,[2,11]);
                              playTask(25);
                           }
                           MapManager.currentMap.controlLevel.addChild(_animateMc);
                        });
                     });
                  },function():void
                  {
                     FightManager.fightNoMapBoss("",7129,false,true,function():void
                     {
                        if(FightManager.isWin)
                        {
                           getGift(i);
                           playTask(24);
                        }
                        else
                        {
                           SocketConnection.sendByQueue(42259,[2,11]);
                           playTask(25);
                        }
                        MapManager.currentMap.controlLevel.addChild(_animateMc);
                     });
                  });
            }
         };
         _isPlaying = true;
         _activityXml.playStory(i,callBack);
      }
   }
}
