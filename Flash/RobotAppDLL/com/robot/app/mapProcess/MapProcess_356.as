package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.taskscollection.Task1715;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class MapProcess_356 extends BaseMapProcess
   {
       
      
      private var miao:OgreModel;
      
      public function MapProcess_356()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         this.initMiao();
         Task1715.initForMap356(this);
      }
      
      private function initMiao() : void
      {
         var _loc1_:Point = null;
         if(SystemTimerManager.sysDate.getUTCHours() + 8 >= 13 && SystemTimerManager.sysDate.getUTCHours() + 8 < 15)
         {
            do
            {
               _loc1_ = new Point(uint(Math.random() * 960),uint(Math.random() * 560));
            }
            while(!MapManager.currentMap.isBlock(_loc1_));
            
            this.miao = new OgreModel(0);
            this.miao.show(852,_loc1_);
            this.miao.addEventListener(MouseEvent.CLICK,this.onMiaoClick);
         }
      }
      
      private function onMiaoClick(param1:MouseEvent) : void
      {
         FightManager.fightWithBoss("妙妙",0);
      }
      
      override public function destroy() : void
      {
         if(this.miao)
         {
            this.miao.removeEventListener(MouseEvent.CLICK,this.onMiaoClick);
            this.miao.destroy();
         }
         Task1715.destroy();
      }
   }
}
