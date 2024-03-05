package com.robot.app.petRoayle
{
   import com.robot.core.CommandID;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.net.SocketConnection;
   import flash.geom.Point;
   import org.taomee.ds.HashMap;
   
   public class RoaylePeopleModelManager
   {
       
      
      private var _modelHasMap:HashMap;
      
      private var _infoHashMap:HashMap;
      
      private var _currentTarget:com.robot.app.petRoayle.RoaylePeopleModelWrapper;
      
      public function RoaylePeopleModelManager()
      {
         super();
         this._infoHashMap = new HashMap();
         this._modelHasMap = new HashMap();
         this._modelHasMap.add(MainManager.actorID,new com.robot.app.petRoayle.RoaylePeopleModelWrapper(MainManager.actorModel));
      }
      
      public function get currentTarget() : com.robot.app.petRoayle.RoaylePeopleModelWrapper
      {
         return this._currentTarget;
      }
      
      public function get infoHashMap() : HashMap
      {
         return this._infoHashMap;
      }
      
      public function get modelHashMap() : HashMap
      {
         return this._modelHasMap;
      }
      
      public function getWrapperByID(param1:uint) : com.robot.app.petRoayle.RoaylePeopleModelWrapper
      {
         return this._modelHasMap.getValue(param1);
      }
      
      public function getInfoByID(param1:uint) : PetRoayleInfo
      {
         return this._infoHashMap.getValue(param1);
      }
      
      public function addInfo(param1:PetRoayleInfo) : void
      {
         this._infoHashMap.add(param1.userID,param1);
      }
      
      public function initModel() : void
      {
         var _loc3_:com.robot.app.petRoayle.RoaylePeopleModelWrapper = null;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc1_:Array = UserManager.getUserIDList();
         var _loc2_:Array = this._modelHasMap.getKeys();
         for each(_loc4_ in _loc1_)
         {
            _loc3_ = this.getWrapperByID(_loc4_);
            if(_loc3_)
            {
               _loc3_.model = UserManager.getUserModel(_loc4_);
            }
            else
            {
               _loc3_ = new com.robot.app.petRoayle.RoaylePeopleModelWrapper(UserManager.getUserModel(_loc4_));
               this._modelHasMap.add(_loc4_,_loc3_);
            }
         }
         for each(_loc5_ in _loc2_)
         {
            if(_loc1_.indexOf(_loc5_) == -1 && _loc5_ != MainManager.actorID)
            {
               this.removeModel(_loc5_);
            }
         }
      }
      
      public function removeModel(param1:uint) : void
      {
         var _loc2_:com.robot.app.petRoayle.RoaylePeopleModelWrapper = this._modelHasMap.getValue(param1);
         if(_loc2_)
         {
            if(this._currentTarget == _loc2_)
            {
               this.setTarget(null);
            }
            if(_loc2_)
            {
               this._modelHasMap.remove(param1);
               _loc2_.destroy();
            }
         }
      }
      
      private function setTarget(param1:com.robot.app.petRoayle.RoaylePeopleModelWrapper) : void
      {
         if(this._currentTarget)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,this.onWalkStart);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkFrame);
            this._currentTarget = null;
         }
         if(param1)
         {
            this._currentTarget = param1;
            MainManager.actorModel.addEventListener(RobotEvent.WALK_END,this.onWalkStart);
            MainManager.actorModel.addEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkFrame);
            PetRoayleMapController.showTarget(param1);
            this.onWalkStart(null);
         }
      }
      
      private function onWalkStart(param1:RobotEvent) : void
      {
         var _loc2_:Point = this._currentTarget.model.walk.endP;
         if(!_loc2_)
         {
            _loc2_ = this._currentTarget.model.pos;
         }
         MainManager.actorModel.walkAction(_loc2_,true);
      }
      
      private function onWalkFrame(param1:RobotEvent) : void
      {
         if(Point.distance(MainManager.actorModel.pos,this._currentTarget.model.pos) < 50)
         {
            PetFightModel.status == PetFightModel.FIGHT_WITH_PLAYER;
            SocketConnection.send(CommandID.PETROAYLE_FIGHT_INVITE,this._currentTarget.model.info.userID);
            this.setTarget(null);
         }
      }
      
      public function changeTarget(param1:uint, param2:uint, param3:Boolean = false) : void
      {
         if(param1 == 0 && param2 == 0)
         {
            this.setTarget(null);
            return;
         }
         var _loc4_:com.robot.app.petRoayle.RoaylePeopleModelWrapper = this.getWrapperByID(param2);
         var _loc5_:PetRoayleInfo = this.getInfoByID(param1);
         var _loc6_:PetRoayleInfo = this.getInfoByID(param2);
         if(param3)
         {
            this.setTarget(_loc4_);
            SocketConnection.send(CommandID.PETROAYLE_FIGHT_CHASE,param2);
         }
         else
         {
            _loc5_.status = 1;
            _loc6_.status = 2;
         }
      }
      
      public function startFight(param1:uint, param2:uint) : void
      {
         var _loc3_:com.robot.app.petRoayle.RoaylePeopleModelWrapper = this.getWrapperByID(param1);
         var _loc4_:com.robot.app.petRoayle.RoaylePeopleModelWrapper = this.getWrapperByID(param2);
         var _loc5_:PetRoayleInfo = this.getInfoByID(param1);
         var _loc6_:PetRoayleInfo = this.getInfoByID(param2);
         if(this._currentTarget == _loc3_ || this._currentTarget == _loc4_)
         {
            this.setTarget(null);
         }
         _loc5_.status = 3;
         _loc6_.status = 3;
      }
      
      public function destroy() : void
      {
         var _loc1_:com.robot.app.petRoayle.RoaylePeopleModelWrapper = null;
         if(this._currentTarget)
         {
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_END,this.onWalkStart);
            MainManager.actorModel.removeEventListener(RobotEvent.WALK_ENTER_FRAME,this.onWalkFrame);
            this._currentTarget = null;
         }
         this._infoHashMap = null;
         if(this._modelHasMap)
         {
            for each(_loc1_ in this._modelHasMap)
            {
               _loc1_.destroy();
            }
            this._modelHasMap = null;
         }
      }
   }
}
