package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.config.xml.OgreXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import flash.utils.setInterval;
   
   public class YingXuePartyAddBossController
   {
      
      private static var bosses:Array = [];
      
      private static const boss:Array = [2186,409,284,981,1517,2446,270,95,56,602,623,1615];
      
      private static var _isTip:Array = [false,false];
       
      
      public function YingXuePartyAddBossController()
      {
         super();
      }
      
      public static function setupTip() : void
      {
         setInterval(function():void
         {
            var _loc2_:Boolean = false;
            var _loc1_:Date = SystemTimerManager.sysBJDate;
            if(_loc1_.hours == 13 && !_isTip[0])
            {
               _loc2_ = true;
               _isTip[0] = true;
            }
            else if(_loc1_.hours == 18 && !_isTip[1])
            {
               _loc2_ = true;
               _isTip[1] = true;
            }
            if(_loc2_)
            {
               ModuleManager.showAppModule("YingXuePartyTipPanel",null,-1);
            }
         },5000);
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         var _loc2_:Date = SystemTimerManager.sysBJDate;
         if(_loc2_.month == 0 && _loc2_.date <= 7 || _loc2_.month == 11 && _loc2_.date == 31)
         {
            if(_loc2_.hours >= 13 && _loc2_.hours < 15 || _loc2_.hours >= 18 && _loc2_.hours < 20)
            {
               addBoss();
            }
         }
      }
      
      private static function addBoss() : void
      {
         var _loc4_:OgreModel = null;
         var _loc5_:int = 0;
         var _loc6_:int = 0;
         bosses = [];
         var _loc1_:Array = boss.slice();
         var _loc2_:Array = OgreXMLInfo.getOgreList(1152).slice();
         var _loc3_:int = 0;
         while(_loc3_ < 4)
         {
            (_loc4_ = new OgreModel(_loc3_)).addEventListener(RobotEvent.OGRE_CLICK,onClickHandler);
            _loc5_ = Math.random() * _loc2_.length;
            _loc6_ = Math.random() * _loc1_.length;
            _loc4_.show(_loc1_[_loc6_],_loc2_[_loc5_]);
            _loc1_.splice(_loc6_,1);
            _loc2_.splice(_loc5_,1);
            bosses.push(_loc4_);
            _loc3_++;
         }
      }
      
      protected static function onClickHandler(param1:RobotEvent) : void
      {
         var _loc2_:OgreModel = param1.currentTarget as OgreModel;
         var _loc3_:int = boss.indexOf(_loc2_.id);
         FightManager.fightWithBoss("",_loc3_);
      }
      
      private static function removeBoss() : void
      {
         var _loc1_:int = 0;
         var _loc2_:OgreModel = null;
         if(bosses)
         {
            _loc1_ = 0;
            while(_loc1_ < bosses.length)
            {
               _loc2_ = bosses[_loc1_];
               _loc2_.removeEventListener(RobotEvent.OGRE_CLICK,onClickHandler);
               _loc2_.destroy();
               _loc1_++;
            }
            bosses = null;
         }
      }
      
      public static function destroy() : void
      {
         removeBoss();
      }
   }
}
