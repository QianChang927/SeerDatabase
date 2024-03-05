package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.InteractiveObject;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   
   public class BlackKingWelfareAController
   {
      
      private static var sunday:uint = SystemTimerManager.getTimeByDate(2015,8,15,14);
      
      private static var sunday2:uint = SystemTimerManager.getTimeByDate(2015,8,15,18);
      
      private static var saturday:uint = SystemTimerManager.getTimeByDate(2015,8,16,14);
      
      private static var saturday2:uint = SystemTimerManager.getTimeByDate(2015,8,16,18);
      
      private static var now:uint = SystemTimerManager.time;
      
      private static var index:int = 0;
      
      private static var isFighted:Boolean = false;
       
      
      public function BlackKingWelfareAController()
      {
         super();
      }
      
      public static function initMapListener() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,intoMap);
      }
      
      private static function intoMap(param1:MapEvent) : void
      {
         now = SystemTimerManager.time;
         if(now < sunday || now > sunday + 3600 && now < sunday2 || now < saturday && now > sunday2 + 3600 || now > saturday2 + 3600 || now < saturday2 && now > saturday + 3600)
         {
            return;
         }
         checkFight();
         if(param1.mapModel.id == 1104 && checkTime(0))
         {
            addBossToMap(0,725,285);
         }
         else if(param1.mapModel.id == 1103 && checkTime(360))
         {
            addBossToMap(1,700,300);
         }
         else if(param1.mapModel.id == 77 && checkTime(720))
         {
            addBossToMap(2,655,194);
         }
         else if(param1.mapModel.id == 1054 && checkTime(1080))
         {
            addBossToMap(3,666,300);
         }
         else if(param1.mapModel.id == 1084 && checkTime(1440))
         {
            addBossToMap(4,606,300);
         }
      }
      
      private static function addBossToMap(param1:int, param2:int, param3:int) : void
      {
         var $index:int = param1;
         var x:int = param2;
         var y:int = param3;
         ResourceManager.getResource(ClientConfig.getResPath("newNpc/newOneSide/2857.swf"),function(param1:DisplayObject):void
         {
            index = $index;
            param1.x = x;
            param1.y = y;
            MapListenerManager.add(param1 as InteractiveObject,clickBoss);
            MapManager.currentMap.depthLevel.addChild(param1);
         });
      }
      
      private static function checkTime(param1:uint) : Boolean
      {
         var _loc2_:uint = 0;
         var _loc3_:int = 0;
         while(_loc3_ < 2)
         {
            _loc2_ = uint(sunday + param1 + 1800 * _loc3_);
            if(now > _loc2_ && now < _loc2_ + 360)
            {
               return true;
            }
            _loc2_ = uint(sunday2 + param1 + 1800 * _loc3_);
            if(now > _loc2_ && now < _loc2_ + 360)
            {
               return true;
            }
            _loc2_ = uint(saturday + param1 + 1800 * _loc3_);
            if(now > _loc2_ && now < _loc2_ + 360)
            {
               return true;
            }
            _loc2_ = uint(saturday2 + param1 + 1800 * _loc3_);
            if(now > _loc2_ && now < _loc2_ + 360)
            {
               return true;
            }
            _loc3_++;
         }
         return false;
      }
      
      private static function checkFight() : void
      {
         KTool.getMultiValue([13634],function(param1:Array):void
         {
            var _loc3_:int = 0;
            var _loc2_:uint = 0;
            if(now > sunday2 && now < sunday2 + 3600)
            {
               _loc2_ = uint(now - sunday2);
               _loc3_ = _loc2_ / 360 + 11;
            }
            else if(now > sunday && now < sunday + 3600)
            {
               _loc2_ = uint(now - sunday);
               _loc3_ = _loc2_ / 360 + 1;
            }
            else if(now > saturday && now < saturday + 3600)
            {
               _loc2_ = uint(now - saturday);
               _loc3_ = _loc2_ / 360 + 1;
            }
            else if(now > saturday2 && now < saturday2 + 3600)
            {
               _loc2_ = uint(now - saturday2);
               _loc3_ = _loc2_ / 360 + 11;
            }
            isFighted = KTool.getBit(param1[0],_loc3_) == 1;
         });
      }
      
      private static function clickBoss(param1:MouseEvent) : void
      {
         if(isFighted)
         {
            Alarm.show("等几分钟，再去其他场景挑战混元黑帝吧！");
         }
         else
         {
            FightManager.fightNoMapBoss("达克斯特",4742 + index);
         }
      }
   }
}
