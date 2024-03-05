package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class ThreeRockController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const ROCK_NUM:uint = 3;
      
      private static const INIT_POINTS:Array = [[[100,236],[192,242],[744,172]],[[202,350],[356,336],[686,344]],[[906,170],[850,348],[860,270]]];
      
      private static var _rock1:MovieClip;
      
      private static var _rock2:MovieClip;
      
      private static var _rock3:MovieClip;
      
      private static var _rockStatus:Array;
       
      
      public function ThreeRockController()
      {
         super();
      }
      
      public static function initRocks(param1:BaseMapProcess) : void
      {
         var _loc2_:Boolean = false;
         var _loc4_:uint = 0;
         _map = param1;
         _rockStatus = new Array(3);
         var _loc3_:uint = 0;
         while(_loc3_ < ROCK_NUM)
         {
            _loc2_ = Math.random() < 0.1 ? true : false;
            _rockStatus[_loc3_] = _loc2_;
            if(_loc2_)
            {
               _loc4_ = uint(_loc3_ + 1);
               while(_loc4_ < ROCK_NUM)
               {
                  _rockStatus[_loc4_] = false;
                  _loc4_++;
               }
               break;
            }
            _loc3_++;
         }
         _rock1 = _map.conLevel["rock_1"];
         _rock2 = _map.conLevel["rock_2"];
         _rock3 = _map.conLevel["rock_3"];
         _rock1.buttonMode = true;
         _rock2.buttonMode = true;
         _rock3.buttonMode = true;
         ToolTipManager.add(_rock1,"奇怪的石头");
         ToolTipManager.add(_rock2,"奇怪的石头");
         ToolTipManager.add(_rock3,"奇怪的石头");
         _rock1.addEventListener(MouseEvent.CLICK,onRockClick);
         _rock2.addEventListener(MouseEvent.CLICK,onRockClick);
         _rock3.addEventListener(MouseEvent.CLICK,onRockClick);
         initRocksPoint();
      }
      
      private static function initRocksPoint() : void
      {
         var _loc1_:uint = 0;
         var _loc2_:uint = 0;
         while(_loc2_ < ROCK_NUM)
         {
            _loc1_ = Math.floor(Math.random() * 3);
            _map.conLevel["rock_" + (_loc2_ + 1)].x = INIT_POINTS[_loc2_][_loc1_][0];
            _map.conLevel["rock_" + (_loc2_ + 1)].y = INIT_POINTS[_loc2_][_loc1_][1];
            _loc2_++;
         }
      }
      
      private static function onRockClick(param1:MouseEvent) : void
      {
         var index:uint;
         var rock:MovieClip = null;
         var event:MouseEvent = param1;
         rock = event.target as MovieClip;
         ToolTipManager.remove(rock);
         rock.removeEventListener(MouseEvent.CLICK,onRockClick);
         index = uint(rock.name.split("_")[1]) - 1;
         if(_rockStatus[index])
         {
            AnimateManager.playMcAnimate(rock,3,"mc_3",function():void
            {
               ToolTipManager.add(rock,"该伊");
               rock.addEventListener(MouseEvent.CLICK,onFightBoss);
            });
         }
         else
         {
            AnimateManager.playMcAnimate(rock,2,"mc_2");
         }
      }
      
      private static function onFightBoss(param1:MouseEvent) : void
      {
         FightManager.fightWithBoss("该伊",0);
      }
      
      public static function destroy() : void
      {
         _rock1.removeEventListener(MouseEvent.CLICK,onRockClick);
         _rock2.removeEventListener(MouseEvent.CLICK,onRockClick);
         _rock3.removeEventListener(MouseEvent.CLICK,onRockClick);
         _rock1.removeEventListener(MouseEvent.CLICK,onFightBoss);
         _rock2.removeEventListener(MouseEvent.CLICK,onFightBoss);
         _rock3.removeEventListener(MouseEvent.CLICK,onFightBoss);
         ToolTipManager.remove(_rock1);
         ToolTipManager.remove(_rock2);
         ToolTipManager.remove(_rock3);
         _rock1 = null;
         _rock2 = null;
         _rock3 = null;
         _rockStatus = null;
      }
   }
}
