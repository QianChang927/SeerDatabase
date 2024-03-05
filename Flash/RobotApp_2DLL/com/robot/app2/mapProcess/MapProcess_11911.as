package com.robot.app2.mapProcess
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SpecAlert;
   import flash.events.MouseEvent;
   import org.taomee.utils.Utils;
   
   public class MapProcess_11911 extends BaseMapProcess
   {
       
      
      private var _step:int;
      
      public var _map:MapModel;
      
      private var _isfightAllBoss:Boolean = false;
      
      private var _curIndex:int = 0;
      
      private var _itemNum:int;
      
      public function MapProcess_11911()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this._map = MapManager.currentMap;
         this._map.topLevel.mouseChildren = false;
         this._map.topLevel.mouseEnabled = false;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
         if(!BufferRecordManager.getMyState(1299))
         {
            NpcDialog.show(5545,["这里就是夜寂塔吗？看着还挺宏伟的。"],["..."],[function():void
            {
               NpcDialog.show(5563,["是的，听说塔顶存放着月小队搜刮来的宝物。"],["..."],[function():void
               {
                  NpcDialog.show(5545,["既然如此，那我们偷偷到塔顶把他们搜刮的物资给夺回来吧！"],["..."],[function():void
                  {
                     NpcDialog.show(4181,["谁在那边，给我出来！"],["..."],[function():void
                     {
                        NpcDialog.show(5563,["不好，我们被发现了，快行动吧~"],["..."],[function():void
                        {
                           BufferRecordManager.setMyState(1299,true);
                        }],false,null,true);
                     }],false,null,true);
                  }],false,null,true);
               }],false,null,true);
            }],false,null,true);
         }
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "closeBtn":
               if(MainManager.actorInfo.mapID == 1)
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     MapManager.changeMapWithCallback(2,function():void
                     {
                     });
                  });
               }
               else
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                  });
               }
               break;
            case "enterBtn":
               ModuleManager.showModule(ClientConfig.getAppModule("BraveInTheTowerOfNightSilenceMainPanel"),"正在打开....");
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               if(MainManager.actorInfo.superNono)
               {
                  PetManager.cureAll();
               }
               else
               {
                  cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
                  if(cls.bonusType == 1)
                  {
                     PetManager.cureAll();
                  }
                  else
                  {
                     SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
                     {
                        PetManager.cureAll();
                     });
                  }
               }
               break;
            case "npcBtn":
         }
      }
      
      public function update() : void
      {
         KTool.getMultiValue([105294],function(param1:Array):void
         {
         });
      }
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
