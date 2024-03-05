package com.robot.app2.mapProcess
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.activityHelper.actions.BuyItemAction;
   import com.robot.app2.control.activityHelper.actions.SendFightAction;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.config.xml.ServerMapsXMLInfo;
   import com.robot.core.controller.MapController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   
   public class MapProcess_11814 extends BaseMapProcess
   {
       
      
      public function MapProcess_11814()
      {
         super();
      }
      
      override protected function init() : void
      {
         StatManager.sendStat2014("0215噬梦之灵超进化","进入八岐大蛇场景","2019运营活动");
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11814;
         MapController.forceChange = true;
         ToolBarController.panel.visible = false;
         KTool.hideMapPlayerAndMonster();
         topLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         conLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var str:String = String(e.target.name);
         var index:int = int(e.target.name.split("_")[1]);
         switch(str)
         {
            case "close":
               MapManager.changeMapWithCallback(ServerMapsXMLInfo.getLoginMapId(2),function():void
               {
                  ModuleManager.showAppModule("EatDreamSpriteEvoMainPanel");
               });
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
               break;
            case "boss":
               NpcDialogNew_1.show(3095,["嘶……我饿了……美餐……"],["来吧！","用钻石砸晕你！","快跑啊！"],[function():void
               {
                  StatManager.sendStat2014("0215噬梦之灵超进化","开始挑战八岐大蛇","2019运营活动");
                  new SendFightAction({
                     "type":"sendfight",
                     "cmdId":"43767",
                     "args":["14","1"]
                  }).doAction(null);
               },function():void
               {
                  new BuyItemAction({
                     "name":"buyItem",
                     "num":1,
                     "type":"buy",
                     "productID":"255412",
                     "itemID":"1719274",
                     "cmdId":"43767",
                     "args":[15,5]
                  }).doAction(null).then(function():void
                  {
                     update();
                  });
               }]);
         }
      }
      
      protected function update() : void
      {
         this.closeEvent();
         conLevel["boss"].mouseChildren = false;
         conLevel["boss"].buttonMode = true;
         KTool.getMultiValue([103293],function(param1:Array):void
         {
            var arr:Array = param1;
            openEvent();
            if(arr[0] >= 2)
            {
               Alarm.show("恭喜你成功通过这一关！",function():void
               {
                  MapManager.changeMap(11815);
               });
            }
         });
      }
      
      protected function closeEvent() : void
      {
         conLevel.mouseChildren = false;
         conLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
      }
      
      protected function openEvent() : void
      {
         conLevel.mouseChildren = true;
         conLevel.mouseEnabled = true;
         topLevel.mouseChildren = true;
         topLevel.mouseEnabled = true;
      }
      
      override public function destroy() : void
      {
         topLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         conLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         ToolBarController.panel.visible = true;
         MapController.forceChange = false;
         KTool.showMapPlayerAndMonster();
         super.destroy();
      }
   }
}
