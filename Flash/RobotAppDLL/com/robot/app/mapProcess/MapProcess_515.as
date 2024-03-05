package com.robot.app.mapProcess
{
   import com.robot.app.task.taskscollection.Task819;
   import com.robot.app.task.taskscollection.Task836;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import gs.TweenLite;
   
   public class MapProcess_515 extends BaseMapProcess
   {
       
      
      public function MapProcess_515()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.initShip();
         Task836.initForMap515(this);
         Task819.initTaskForMap515(this);
      }
      
      private function initShip() : void
      {
         conLevel["ship"].buttonMode = true;
         conLevel["ship"].addEventListener(MouseEvent.CLICK,this.onShipClick);
      }
      
      private function onShipClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         MainManager.actorModel.moveAndAction(new Point(800,400),function():void
         {
            var ship:MovieClip = null;
            LevelManager.closeMouseEvent();
            conLevel["ship"].buttonMode = false;
            conLevel["ship"].removeEventListener(MouseEvent.CLICK,onShipClick);
            ship = conLevel["ship"];
            ship.x = 0;
            ship.y = 0;
            MainManager.actorModel.addChildAt(ship,0);
            TweenLite.to(MainManager.actorModel,4,{
               "x":428,
               "y":296,
               "onComplete":function():void
               {
                  LevelManager.openMouseEvent();
                  ship.x = 428;
                  ship.y = 296;
                  conLevel.addChildAt(ship,0);
                  MapManager.changeMap(693);
               }
            });
         });
      }
      
      override public function destroy() : void
      {
         Task819.destroy();
         Task836.destroy();
      }
   }
}
