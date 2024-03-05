package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   
   public class FightAction extends BaseAction
   {
       
      
      protected var bossIdArr:Array;
      
      public function FightAction(param1:*)
      {
         var _loc2_:Array = null;
         var _loc3_:String = null;
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         super(param1);
         this.bossIdArr = new Array();
         if(_data["value"] != null)
         {
            _loc2_ = _data["value"].split("|");
            for each(_loc3_ in _loc2_)
            {
               if((_loc4_ = _loc3_.split("-"))[1] == null || _loc4_[1] < _loc4_[0])
               {
                  this.bossIdArr.push(_loc4_[0]);
               }
               else
               {
                  _loc5_ = int(_loc4_[0]);
                  while(_loc5_ <= _loc4_[1])
                  {
                     this.bossIdArr.push(_loc5_);
                     _loc5_++;
                  }
               }
            }
         }
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var _loc3_:String = null;
         var _loc2_:int = 1;
         if(param1 != null && param1 is int)
         {
            _loc2_ = param1;
         }
         if(_data["bossname"] is Array)
         {
            _loc3_ = String(_data["bossname"][_loc2_ - 1]);
         }
         else if(_data["bossname"] != null)
         {
            _loc3_ = String(_data["bossname"]);
         }
         if(_loc3_ == null)
         {
            _loc3_ = "";
         }
         if(this.bossIdArr.length >= _loc2_)
         {
            _loc2_ = int(this.bossIdArr[_loc2_ - 1]);
            return FightManager.fightNoMapBossWithPromise(_loc3_,_loc2_,false,true);
         }
         return Deferred.reject("error args");
      }
   }
}
