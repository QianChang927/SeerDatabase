package com.robot.core.info.pet.update
{
   import com.robot.core.event.PetEvent;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import flash.utils.IDataInput;
   
   public class UpdateSkillInfo
   {
       
      
      private var _petCatchTime:uint;
      
      private var _activeSkills:Array;
      
      private var _unactiveSkills:Array;
      
      public function UpdateSkillInfo(param1:IDataInput = null)
      {
         var _loc2_:uint = 0;
         var _loc3_:uint = 0;
         var _loc4_:uint = 0;
         var _loc5_:uint = 0;
         var _loc6_:PetInfo = null;
         this._activeSkills = [];
         this._unactiveSkills = [];
         super();
         if(param1)
         {
            this._petCatchTime = param1.readUnsignedInt();
            _loc2_ = uint(param1.readUnsignedInt());
            _loc3_ = uint(param1.readUnsignedInt());
            _loc4_ = 0;
            while(_loc4_ < _loc2_)
            {
               this._activeSkills.push(param1.readUnsignedInt());
               _loc4_++;
            }
            _loc5_ = 0;
            while(_loc5_ < _loc3_)
            {
               this._unactiveSkills.push(param1.readUnsignedInt());
               _loc5_++;
            }
            if(_loc6_ = PetManager.getPetInfo(this._petCatchTime))
            {
               PetManager.dispatchEvent(new PetEvent(PetEvent.STUDY_BLACK_SKILL,this._petCatchTime));
            }
         }
      }
      
      public function get petCatchTime() : uint
      {
         return this._petCatchTime;
      }
      
      public function get activeSkills() : Array
      {
         return this._activeSkills;
      }
      
      public function get unactiveSkills() : Array
      {
         return this._unactiveSkills;
      }
      
      public function set petCatchTime(param1:uint) : void
      {
         this._petCatchTime = param1;
      }
      
      public function set activeSkills(param1:Array) : void
      {
         this._activeSkills = param1;
      }
      
      public function set unactiveSkills(param1:Array) : void
      {
         this._unactiveSkills = param1;
      }
   }
}
