package com.robot.app.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import flash.geom.Point;
   
   public class MapProcess_11360 extends BaseMapProcess
   {
      
      private static var ogres:Array = [];
      
      private static var _bossId:int = 2723;
       
      
      public function MapProcess_11360()
      {
         super();
      }
      
      private static function removeBoss() : void
      {
         var _loc1_:int = 0;
         var _loc2_:OgreModel = null;
         if(ogres)
         {
            _loc1_ = 0;
            while(_loc1_ < ogres.length)
            {
               _loc2_ = ogres[_loc1_];
               _loc2_.removeEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
               _loc2_.destroy();
               _loc1_++;
            }
            ogres.splice(0);
         }
      }
      
      protected static function onClickBossHandler(param1:RobotEvent) : void
      {
         var event:RobotEvent = param1;
         FightManager.fightNoMapBoss("幻世帝天",6803,false,true,function():void
         {
            if(FightManager.isWin)
            {
            }
         });
      }
      
      override protected function init() : void
      {
         this.addBoss();
      }
      
      public function addBoss() : void
      {
         var _loc3_:OgreModel = null;
         removeBoss();
         ogres = [];
         var _loc1_:Array = [new Point(611,378),new Point(660,442),new Point(830,272),new Point(567,259)];
         var _loc2_:int = 0;
         while(_loc2_ < _loc1_.length)
         {
            _loc3_ = new OgreModel(_loc2_);
            ogres.push(_loc3_);
            _loc3_.addEventListener(RobotEvent.OGRE_CLICK,onClickBossHandler);
            _loc3_.show(_bossId,_loc1_[_loc2_]);
            _loc2_++;
         }
      }
      
      override public function destroy() : void
      {
         removeBoss();
      }
   }
}
