package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import flash.geom.Point;
   
   public class MapProcess_1337 extends BaseMapProcess
   {
      
      private static var ogres:Array = [];
      
      private static var _bossId:int = 1173;
      
      private static var _curOgre:int;
       
      
      public function MapProcess_1337()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         this.addBoss();
      }
      
      override public function destroy() : void
      {
         this.removeBoss();
         super.destroy();
      }
      
      public function addBoss() : void
      {
         var _loc3_:OgreModel = null;
         this.removeBoss();
         ogres = [];
         var _loc1_:Array = [new Point(263,347),new Point(297,186),new Point(653,206),new Point(675,347)];
         var _loc2_:int = 0;
         while(_loc2_ < 4)
         {
            _loc3_ = new OgreModel(_loc2_);
            ogres.push(_loc3_);
            _loc3_.addEventListener(RobotEvent.OGRE_CLICK,this.onClickBossHandler);
            _loc3_.show(_bossId,_loc1_[_loc2_]);
            _loc2_++;
         }
      }
      
      protected function onClickBossHandler(param1:RobotEvent) : void
      {
         FightManager.fightWithBoss("彩色菇",0);
      }
      
      private function removeBoss() : void
      {
         var _loc1_:int = 0;
         var _loc2_:OgreModel = null;
         if(ogres)
         {
            _loc1_ = 0;
            while(_loc1_ < ogres.length)
            {
               _loc2_ = ogres[_loc1_];
               _loc2_.removeEventListener(RobotEvent.OGRE_CLICK,this.onClickBossHandler);
               _loc2_.destroy();
               _loc1_++;
            }
            ogres.splice(0);
         }
      }
   }
}
