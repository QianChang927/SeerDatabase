package com.robot.app.control
{
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.manager.PetManager;
   import org.taomee.debug.DebugTrace;
   
   public class PetEnvolutionController
   {
      
      private static var _info:PetInfo;
      
      private static var _catchTime:uint;
      
      private static var _petInBag:Boolean;
       
      
      public function PetEnvolutionController()
      {
         super();
      }
      
      public static function isPetInBag(param1:uint) : PetInfo
      {
         var _loc3_:PetInfo = null;
         _petInBag = false;
         var _loc2_:Array = PetManager.infos;
         var _loc4_:int = 0;
         while(_loc4_ < _loc2_.length)
         {
            _info = _loc2_[_loc4_] as PetInfo;
            DebugTrace.show("背包内精灵ID为：" + _info.id + "----" + _info.catchTime);
            if(_info.id == param1)
            {
               _petInBag = true;
               _loc3_ = _info;
            }
            _loc4_++;
         }
         if(!_petInBag)
         {
            _loc3_ = null;
         }
         return _loc3_;
      }
      
      public static function hasNewSkillPetInBag(param1:Array) : PetInfo
      {
         var _loc5_:PetInfo = null;
         var _loc2_:uint = param1.length;
         var _loc3_:PetInfo = null;
         var _loc4_:uint = 0;
         while(_loc4_ < _loc2_)
         {
            if((_loc5_ = isPetInBag(param1[_loc4_])) != null)
            {
               _loc3_ = _loc5_;
            }
            _loc4_++;
         }
         return _loc3_;
      }
   }
}
