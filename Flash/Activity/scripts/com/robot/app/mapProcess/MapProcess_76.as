package com.robot.app.mapProcess
{
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.geom.Point;
   import gs.TweenLite;
   
   public class MapProcess_76 extends BaseMapProcess
   {
       
      
      private const PREV_MAP_ID:int = 78;
      
      public function MapProcess_76()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         if(MapManager.prevMapID == this.PREV_MAP_ID)
         {
            this.Entry_78();
         }
      }
      
      private function Entry_78() : void
      {
         LevelManager.closeMouseEvent();
         MainManager.actorModel.removeEventListener(Event.ENTER_FRAME,this.onEnterFrame);
         MainManager.actorModel.addEventListener(Event.ENTER_FRAME,this.onEnterFrame);
         this.yunMc.x = 4 * MainManager.actorModel.pos.x / 5;
         this.yunMc.y = 4 * MainManager.actorModel.pos.y / 5;
         TweenLite.to(this.yunMc,4,{
            "x":696,
            "y":412,
            "onComplete":this.completeFn_2
         });
      }
      
      private function completeFn_2() : void
      {
         LevelManager.openMouseEvent();
         MainManager.actorModel.removeEventListener(Event.ENTER_FRAME,this.onEnterFrame);
         MainManager.actorModel.pos = new Point(567,460);
      }
      
      private function get yunMc() : MovieClip
      {
         return this.conLevel["yun"];
      }
      
      public function goto_78() : void
      {
         LevelManager.closeMouseEvent();
         MainManager.actorModel.removeEventListener(Event.ENTER_FRAME,this.onEnterFrame);
         MainManager.actorModel.addEventListener(Event.ENTER_FRAME,this.onEnterFrame);
         MainManager.actorModel.pos = new Point(this.yunMc.x + this.yunMc.width / 4,this.yunMc.y + this.yunMc.height / 4);
         TweenLite.to(this.yunMc,4,{
            "x":580,
            "y":220,
            "onComplete":this.completeFn_1
         });
      }
      
      private function completeFn_1() : void
      {
         LevelManager.openMouseEvent();
         MainManager.actorModel.removeEventListener(Event.ENTER_FRAME,this.onEnterFrame);
         MapManager.changeMap(78);
      }
      
      private function onEnterFrame(param1:Event) : void
      {
         MainManager.actorModel.pos = new Point(this.yunMc.x + this.yunMc.width / 4,this.yunMc.y + this.yunMc.height / 4);
      }
      
      override public function destroy() : void
      {
      }
   }
}
