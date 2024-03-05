package com.robot.app.fight
{
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.tmf.HeadInfo;
   import org.taomee.tmf.TMF;
   
   public class ReplayFightManager
   {
      
      public static const TIME_1:uint = uint(new Date(2012,4,11,5,20).time / 1000);
      
      private static var by:ByteArray;
      
      public static var dataTime:uint;
      
      public static var onOff:Boolean = true;
      
      private static var isReadyForReplay:Boolean = false;
      
      public static var version:uint;
       
      
      public function ReplayFightManager()
      {
         super();
      }
      
      public static function setup(param1:ByteArray, param2:uint) : void
      {
         MainManager.actorModel.stop();
         isReadyForReplay = false;
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapComp);
         dataTime = param2;
         FightManager.isReplay = true;
         FightDispatcher.addEventListener(PetFightEvent.REPLAY_NEXT,onNext);
         by = param1;
         by.position = 0;
         onComp(null);
      }
      
      private static function onComp(param1:Event) : void
      {
         version = by.readUnsignedInt();
         by.readUnsignedInt();
         by.readUnsignedInt();
         by.readUnsignedInt();
         by.readUnsignedInt();
         parsePackage();
      }
      
      private static function parsePackage() : void
      {
         if(!by.bytesAvailable)
         {
            return;
         }
         var _loc1_:uint = by.readUnsignedInt();
         var _loc2_:HeadInfo = new HeadInfo(by);
         var _loc3_:ByteArray = new ByteArray();
         by.readBytes(_loc3_,0,_loc1_ - 17);
         var _loc4_:Class = TMF.getClass(_loc2_.cmdID);
         SocketConnection.dispatchCmd(_loc2_.cmdID,_loc2_,new _loc4_(_loc3_));
      }
      
      private static function onNext(param1:PetFightEvent) : void
      {
         if(onOff)
         {
            parsePackage();
         }
      }
      
      public static function replay() : void
      {
         isReadyForReplay = true;
      }
      
      private static function onMapComp(param1:MapEvent) : void
      {
         if(isReadyForReplay)
         {
            setup(by,dataTime);
         }
      }
   }
}
