package com.robot.core.battleRoyale
{
   import com.robot.core.mode.BasePeoleModel;
   import flash.display.MovieClip;
   import org.taomee.ds.HashMap;
   
   public class BirthPaceManager
   {
      
      public static const MAX_NUM:uint = 4;
      
      private static var _bpArr:Array;
       
      
      public function BirthPaceManager(param1:MovieClip)
      {
         super();
         _bpArr = new Array();
         var _loc2_:int = 1;
         while(_loc2_ <= MAX_NUM)
         {
            _bpArr.push(new BirthPlace(param1["place_" + _loc2_]));
            _loc2_++;
         }
      }
      
      public function unBirthAll(param1:HashMap, param2:HashMap) : void
      {
         var _loc4_:RoyaleUserInfo = null;
         var _loc3_:int = 0;
         for each(_loc4_ in param1.getValues())
         {
            if(param2.containsKey(_loc4_.userID))
            {
               _bpArr[_loc3_++].inUse(param2.getValue(_loc4_.userID));
            }
         }
      }
      
      public function unBirthOne(param1:BasePeoleModel, param2:uint) : void
      {
         var _loc3_:int = 0;
         if(!_bpArr[param2].isUse)
         {
            _bpArr[param2].inUse(param1);
         }
         else
         {
            _loc3_ = Math.floor(Math.random() * MAX_NUM);
            while(_bpArr[_loc3_].isUse)
            {
               _loc3_ = Math.floor(Math.random() * MAX_NUM);
            }
            _bpArr[_loc3_].inUse(param1);
         }
      }
      
      public function brithAll() : void
      {
         var _loc1_:BirthPlace = null;
         for each(_loc1_ in _bpArr)
         {
            _loc1_.birth();
         }
      }
      
      public function birthOne(param1:uint, param2:Function = null) : void
      {
         var _loc3_:BirthPlace = null;
         for each(_loc3_ in _bpArr)
         {
            if(_loc3_.isUse && _loc3_.body.info.userID == param1)
            {
               _loc3_.birth(param2);
            }
         }
      }
      
      public function destroy() : void
      {
      }
   }
}
