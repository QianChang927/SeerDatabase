package com.robot.app2.mapProcess.control
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.utils.CommonUI;
   import flash.events.Event;
   import flash.events.MouseEvent;
   
   public class ChildrensDayGrandOpeningController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _questionArr:Array;
      
      private static var _ballonNum:int;
      
      private static var _index:int;
      
      private static var _state:int;
       
      
      public function ChildrensDayGrandOpeningController()
      {
         super();
      }
      
      public static function destroy() : void
      {
         _map.btnLevel.removeEventListener(MouseEvent.CLICK,onClick);
         _map = null;
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         _questionArr = [];
         update();
         _map.btnLevel.addEventListener(MouseEvent.CLICK,onClick);
      }
      
      public static function showBallon() : void
      {
         if(_state >= 63)
         {
            Alarm.show("今天的气球已经都没有咯！明天再来吧！");
            return;
         }
         CommonUI.removeYellowArrow(_map.btnLevel);
         if(_state < 7)
         {
            CommonUI.addYellowArrow(_map.btnLevel,_map.btnLevel["balloonMc_" + 2].x + 70,_map.btnLevel["balloonMc_" + 3].y + 30,60);
         }
         else
         {
            CommonUI.addYellowArrow(_map.btnLevel,_map.btnLevel["balloonMc_" + 3].x,_map.btnLevel["balloonMc_" + 3].y + 50,-90);
         }
      }
      
      public static function showAnimate() : void
      {
         _map.btnLevel["balloonMc_" + _index].gotoAndStop(2);
         _map.btnLevel.addEventListener(Event.ENTER_FRAME,function(param1:Event):void
         {
            var e:Event = param1;
            _map.btnLevel.removeEventListener(Event.ENTER_FRAME,arguments.callee);
            AnimateManager.playMcEndHandler(_map.btnLevel["balloonMc_" + _index].getChildAt(0),function():void
            {
               _map.btnLevel["balloonMc_" + _index].visible = false;
               update();
            });
         });
      }
      
      private static function update() : void
      {
         KTool.getMultiValue([11100],function(param1:Array):void
         {
            var _loc2_:* = false;
            _state = param1[0];
            var _loc3_:int = 0;
            while(_loc3_ < 6)
            {
               _loc2_ = KTool.getBit(param1[0],_loc3_ + 1) == 0;
               if(_loc2_ && (_questionArr[_loc3_] < 0 || _questionArr.length <= _loc3_))
               {
                  _questionArr[_loc3_] = random();
               }
               if(_loc2_)
               {
                  ++_ballonNum;
               }
               _map.btnLevel["balloonMc_" + _loc3_].visible = _loc2_;
               _map.btnLevel["balloonMc_" + _loc3_].gotoAndStop(1);
               _loc3_++;
            }
            if(_state >= 63)
            {
            }
         });
      }
      
      private static function random() : int
      {
         var _loc1_:int = 0;
         var _loc2_:int = 0;
         while(true)
         {
            _loc1_ = int(Math.random() * 13 + 1);
            if(_questionArr.indexOf(_loc1_) == -1)
            {
               break;
            }
            _loc2_++;
            if(_loc2_ > 100)
            {
               return _loc1_;
            }
         }
         return _loc1_;
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var _loc3_:int = 0;
         var _loc2_:String = String(param1.target.name);
         if(_loc2_ == "bbs")
         {
            StatManager.sendStat2014("0527儿童节盛大开启","点击公告牌","2016运营活动");
            ModuleManager.showAppModule("ChildrensDayGrandOpeningAssemblePanel");
         }
         else if(_loc2_.indexOf("balloonBtn_") != -1)
         {
            StatManager.sendStat2014("0527儿童节盛大开启","点击场景气球","2016运营活动");
            _loc3_ = int(_loc2_.replace("balloonBtn_",""));
            _index = _loc3_;
            ModuleManager.showAppModule("ChildrensDayGrandOpeningAskPanel",{
               "frame":_questionArr[_loc3_],
               "index":_loc3_ + 1
            });
         }
      }
   }
}
