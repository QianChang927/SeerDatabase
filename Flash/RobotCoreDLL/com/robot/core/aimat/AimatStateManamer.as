package com.robot.core.aimat
{
   import com.robot.core.info.AimatInfo;
   import com.robot.core.mode.IActionSprite;
   import org.taomee.ds.HashMap;
   import org.taomee.manager.TickManager;
   import org.taomee.utils.Utils;
   
   public class AimatStateManamer
   {
      
      private static const PATH:String = "com.robot.app.aimat.state.AimatState_";
       
      
      private var _list:HashMap;
      
      private var _actionSprite:IActionSprite;
      
      public function AimatStateManamer(param1:IActionSprite)
      {
         this._list = new HashMap();
         super();
         this._actionSprite = param1;
         TickManager.addListener(this.loop);
      }
      
      public function execute(param1:AimatInfo) : void
      {
         var _loc4_:IAimatState = null;
         var _loc2_:IAimatState = this._list.remove(param1.id);
         if(_loc2_)
         {
            _loc2_.destroy();
            _loc2_ = null;
         }
         var _loc3_:Class = Utils.getClass(PATH + param1.aimatState.toString());
         if(_loc3_)
         {
            _loc4_ = new _loc3_();
            this._list.add(param1.id,_loc4_);
            _loc4_.execute(this._actionSprite,param1);
         }
      }
      
      public function isType(param1:uint) : Boolean
      {
         return this._list.containsKey(param1);
      }
      
      public function clear() : void
      {
         this._list.eachValue(function(param1:IAimatState):void
         {
            param1.destroy();
            param1 = null;
         });
         this._list.clear();
      }
      
      public function destroy() : void
      {
         TickManager.removeListener(this.loop);
         this.clear();
         this._list = null;
         this._actionSprite = null;
      }
      
      private function loop() : void
      {
         if(this._list.isEmpty())
         {
            return;
         }
         this._list.each2(function(param1:uint, param2:IAimatState):void
         {
            if(param2.isFinish)
            {
               _list.remove(param1);
               param2.destroy();
               param2 = null;
            }
         });
      }
   }
}
