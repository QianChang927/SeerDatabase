package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   
   public class FrozenMonsterController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _isShow:Boolean = false;
       
      
      public function FrozenMonsterController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
         var _loc2_:int = 0;
         while(_loc2_ < 5)
         {
            (_map.conLevel["item_" + _loc2_] as MovieClip).addEventListener(MouseEvent.CLICK,onClickItem);
            (_map.conLevel["item_" + _loc2_] as MovieClip).buttonMode = true;
            _loc2_++;
         }
         if(_isShow)
         {
            ModuleManager.showAppModule("FrozenMonsterStep1Panel");
         }
      }
      
      public static function setIsShow(param1:Boolean) : void
      {
         _isShow = param1;
      }
      
      private static function onClickItem(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         ItemManager.updateItems([1705986],function():void
         {
            var _loc2_:Array = null;
            var _loc1_:int = int(ItemManager.getNumByID(1705986));
            if(_loc1_ < 20)
            {
               e.currentTarget.removeEventListener(MouseEvent.CLICK,onClickItem);
               setIsShow(true);
               _loc2_ = [4788,4789,4790,4791];
               FightManager.fightNoMapBoss("",_loc2_[Math.floor(Math.random() * 4)]);
            }
         });
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
