package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.mapProcess.control.IceQueenSiaController;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.utils.BitUtils;
   import flash.events.MouseEvent;
   
   public class MapProcess_11422 extends BaseMapProcess
   {
       
      
      public function MapProcess_11422()
      {
         super();
      }
      
      override protected function init() : void
      {
         KTool.getMultiValue([4594]).then(function(param1:Array):void
         {
            var _loc4_:* = false;
            var _loc2_:int = 0;
            var _loc3_:int = 0;
            while(_loc3_ < 5)
            {
               _loc4_ = BitUtils.getBit(param1[0],_loc3_ + 2) > 0;
               conLevel["mc_" + _loc3_].visible = !_loc4_;
               if(_loc4_)
               {
                  _loc2_++;
               }
               else
               {
                  MapListenerManager.add(conLevel["mc_" + _loc3_],onGo);
               }
               _loc3_++;
            }
            if(_loc2_ == 5)
            {
               IceQueenSiaController.getMonsterSia();
            }
         });
         MapListenerManager.add(topLevel["close"],this.onClose);
         IceQueenSiaController.initForMap(this);
         StatManager.sendStat2014("1223阿克希亚完全体输出","进入主场景","2016运营活动");
      }
      
      private function onGo(param1:MouseEvent) : void
      {
         var _loc2_:int = int(KTool.getIndex(param1.currentTarget));
         StatManager.sendStat2014("1223阿克希亚完全体输出","进入关卡" + (_loc2_ + 1) + "场景","2016运营活动");
         MapManager.changeMap(11423 + _loc2_);
      }
      
      private function onClose(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         MapManager.changeMapWithCallback(IceQueenSiaController.MapID,function():void
         {
            ModuleManager.showAppModule("IceQueenSiaMainPanel");
         });
      }
      
      override public function destroy() : void
      {
         IceQueenSiaController.destroy();
         super.destroy();
      }
   }
}
