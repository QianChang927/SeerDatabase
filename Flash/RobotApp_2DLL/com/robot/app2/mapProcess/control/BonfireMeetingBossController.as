package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.OgreModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.ArrayUtils;
   import flash.geom.Point;
   import org.taomee.events.SocketEvent;
   
   public class BonfireMeetingBossController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const BOSS:Array = [2186,442,409,284,948,1500,164,1333];
      
      private static const POS:Array = [new Point(200,350),new Point(360,430),new Point(680,410)];
      
      private static var _bossList:Array = [];
       
      
      public function BonfireMeetingBossController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onUpdate);
      }
      
      public static function onUpdate(param1:SocketEvent) : void
      {
         var _loc2_:Array = null;
         var _loc3_:int = 0;
         var _loc4_:OgreModel = null;
         if(BonfireMeetingController.isActivityTime())
         {
            if(_bossList.length == 0)
            {
               _loc2_ = getRandomBoss();
               _loc3_ = 0;
               while(_loc3_ < 3)
               {
                  (_loc4_ = new OgreModel(_loc3_)).addEventListener(RobotEvent.OGRE_CLICK,onClickHandler);
                  _loc4_.show(_loc2_[_loc3_],POS[_loc3_]);
                  _bossList.push(_loc4_);
                  _loc3_++;
               }
            }
         }
         else
         {
            removeBoss();
         }
      }
      
      private static function getRandomBoss() : Array
      {
         var _loc1_:Array = [];
         var _loc2_:int = 0;
         while(_loc2_ < BOSS.length)
         {
            _loc1_[_loc2_] = BOSS[_loc2_];
            _loc2_++;
         }
         return ArrayUtils.shuffle(_loc1_);
      }
      
      protected static function onClickHandler(param1:RobotEvent) : void
      {
         var _loc2_:OgreModel = param1.currentTarget as OgreModel;
         var _loc3_:int = 0;
         if(SystemTimerManager.sysBJDate.hours > 17)
         {
            _loc3_ = 1;
         }
         var _loc4_:int = BOSS.indexOf(_loc2_.id);
         FightManager.fightWithBoss(PetXMLInfo.getName(BOSS[_loc4_]),_loc4_ + _loc3_ * 8);
      }
      
      private static function removeBoss() : void
      {
         var _loc2_:OgreModel = null;
         var _loc1_:int = int(_bossList.length - 1);
         while(_loc1_ >= 0)
         {
            _loc2_ = _bossList.shift();
            _loc2_.destroy();
            _loc1_--;
         }
      }
      
      public static function destroy() : void
      {
         removeBoss();
         _bossList = [];
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onUpdate);
         _map = null;
      }
   }
}
