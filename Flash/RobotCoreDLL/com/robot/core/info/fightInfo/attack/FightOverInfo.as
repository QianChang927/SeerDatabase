package com.robot.core.info.fightInfo.attack
{
   import com.robot.core.event.RobotEvent;
   import com.robot.core.manager.MainManager;
   import flash.utils.IDataInput;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.EventManager;
   
   public class FightOverInfo
   {
       
      
      private var _winnerID:uint;
      
      private var _type:uint;
      
      private var _reason:uint;
      
      private var _deltaTopLv:int;
      
      private var _daltaTopHonour:uint;
      
      public var maxH:uint;
      
      public var totalH:uint;
      
      public var isCanSave:Boolean;
      
      public var _roundNum:uint;
      
      public function FightOverInfo(param1:IDataInput)
      {
         super();
         if(param1 == null)
         {
            return;
         }
         this._type = param1.readUnsignedByte();
         this._reason = param1.readUnsignedInt();
         this._winnerID = param1.readUnsignedInt();
         this.isCanSave = param1.readUnsignedInt() != 0;
         var _loc2_:uint = uint(param1.readUnsignedInt());
         var _loc3_:uint = uint(param1.readUnsignedInt());
         MainManager.actorInfo.twoTimes = _loc2_;
         MainManager.actorInfo.threeTimes = _loc3_;
         MainManager.actorInfo.autoFightTimes = param1.readUnsignedInt();
         MainManager.actorInfo.btlDetectTimes = param1.readUnsignedInt();
         var _loc4_:uint = uint(param1.readUnsignedInt());
         var _loc5_:uint = uint(param1.readUnsignedInt());
         MainManager.actorInfo.energyTimes = _loc4_;
         MainManager.actorInfo.learnTimes = _loc5_;
         this._deltaTopLv = param1.readInt();
         this._daltaTopHonour = param1.readUnsignedInt();
         this.maxH = param1.readUnsignedInt();
         this.totalH = param1.readUnsignedInt();
         this._roundNum = param1.readUnsignedInt();
         var _loc6_:Class;
         if((_loc6_ = getDefinitionByName("com.robot.app.fight.FightManager") as Class).isReplay)
         {
            return;
         }
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.ENERGY_TIMES_CHANGE));
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.SPEEDUP_CHANGE));
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.AUTO_FIGHT_CHANGE));
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.STUDY_TIMES_CHANGE));
         EventManager.dispatchEvent(new RobotEvent(RobotEvent.SHOW_FIGHT_HP_CHANGE));
      }
      
      public function get deltaTopLv() : int
      {
         return this._deltaTopLv;
      }
      
      public function get daltaTopHonour() : uint
      {
         return this._daltaTopHonour;
      }
      
      public function get type() : uint
      {
         return this._type;
      }
      
      public function get winnerID() : uint
      {
         return this._winnerID;
      }
      
      public function get reason() : uint
      {
         return this._reason;
      }
      
      public function get roundNum() : int
      {
         return this._roundNum;
      }
   }
}
