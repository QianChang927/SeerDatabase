package com.robot.app2.control.activityHelper.actions
{
   import com.codecatalyst.promise.Deferred;
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   
   public class VirtualFightAction extends BaseAction
   {
       
      
      protected var virBossArr:Array;
      
      public function VirtualFightAction(param1:*)
      {
         var _loc2_:Array = null;
         var _loc3_:String = null;
         var _loc4_:Array = null;
         var _loc5_:int = 0;
         super(param1);
         this.virBossArr = new Array();
         if(_data["value"] != null)
         {
            _loc2_ = _data["value"].split("|");
            for each(_loc3_ in _loc2_)
            {
               if((_loc4_ = _loc3_.split("-"))[1] == null || _loc4_[1] < _loc4_[0])
               {
                  this.virBossArr.push(_loc4_[0]);
               }
               else
               {
                  _loc5_ = int(_loc4_[0]);
                  while(_loc5_ <= _loc4_[1])
                  {
                     this.virBossArr.push(_loc5_);
                     _loc5_++;
                  }
               }
            }
         }
      }
      
      override public function doAction(param1:* = null) : Promise
      {
         var defer:Deferred = null;
         var args:* = param1;
         defer = new Deferred();
         var index:int = 1;
         if(args != null)
         {
            if(args <= this.virBossArr.length && args > 0)
            {
               index = args;
            }
         }
         FightManager.tryFight(this.virBossArr[index - 1],[0,0,0,0],function():void
         {
            defer.resolve(null);
         });
         return defer.promise;
      }
   }
}
