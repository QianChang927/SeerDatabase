package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.ui.alert.Alert;
   import flash.events.MouseEvent;
   
   public class MapProcess_11606 extends BaseMapProcess
   {
       
      
      private var _index:uint;
      
      public function MapProcess_11606()
      {
         super();
      }
      
      override protected function init() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this.conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         KTool.getMultiValue([16670,16671],function(param1:Array):void
         {
            var i:int = 0;
            var arr:Array = param1;
            if(arr[0] & 1 == 1)
            {
               KTool.changeMapWithCallBack(1,function():void
               {
                  ModuleManager.showAppModule("JustinSummonedMainPanel");
               });
               return;
            }
            i = 1;
            while(i <= 3)
            {
               if(KTool.getBit(arr[1],i) == 1)
               {
                  conLevel["btn_" + i].visible = false;
                  conLevel["arrow_" + i].visible = false;
               }
               else
               {
                  conLevel["btn_" + i].visible = true;
                  conLevel["arrow_" + i].visible = true;
               }
               i++;
            }
         });
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         index = int(str.split("_")[1]);
         switch(str)
         {
            case "btn_" + index:
               Alert.show("是否进入战斗？",function():void
               {
                  StatManager.sendStat2014("0202贾斯汀站长召集令","挑战卫兵","2018运营活动");
                  FightManager.fightNoMapBoss("",12001 + index);
               });
               break;
            case "close":
               KTool.changeMapWithCallBack(1279,function():void
               {
                  ModuleManager.showAppModule("JustinSummonedMainPanel");
               });
               break;
            case "bag":
               ModuleManager.showAppModule("ADPetBagPanelNew");
               break;
            case "cure":
               PetManager.cureAllFree();
         }
      }
      
      override public function destroy() : void
      {
         KTool.showMapAllPlayerAndMonster();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this.conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
