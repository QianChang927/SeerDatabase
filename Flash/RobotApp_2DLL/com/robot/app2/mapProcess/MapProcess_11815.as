package com.robot.app2.mapProcess
{
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.activityHelper.actions.BuyItemAction;
   import com.robot.app2.control.activityHelper.actions.FightAction;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
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
   import com.robot.core.utils.CommonUI;
   import flash.events.MouseEvent;
   
   public class MapProcess_11815 extends BaseMapProcess
   {
       
      
      private var curLevel:int;
      
      private var fightNum:int;
      
      public function MapProcess_11815()
      {
         super();
      }
      
      override protected function init() : void
      {
         StatManager.sendStat2014("0215噬梦之灵超进化","进入第三关第一阶段场景","2019运营活动");
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11815;
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
               NpcDialogNew_1.show(3093,["就让我亲手埋葬你吧！"],["我要阻止你的恶行！","看我用钻石砸晕你！","快跑啊！"],[function():void
               {
                  if(fightNum > 0)
                  {
                     new FightAction({
                        "type":"fight",
                        "value":String(15447 + curLevel)
                     }).doAction();
                  }
                  else
                  {
                     Alarm.show("当前挑战次数不足！");
                  }
               },function():void
               {
                  new BuyItemAction({
                     "num":1,
                     "type":"buy",
                     "productID":255414 + curLevel,
                     "itemID":1719276 + curLevel,
                     "cmdId":"43767",
                     "args":[15,6]
                  }).doAction(null).then(update);
               }]);
               break;
            case "plus":
               new BuyItemAction({
                  "num":1,
                  "type":"buy",
                  "exchangeID":"12367",
                  "productID":255413,
                  "itemID":1719275
               }).doAction().then(this.update);
               break;
            case "mc_2":
               MapManager.changeMap(11816);
         }
      }
      
      protected function update() : void
      {
         this.closeEvent();
         conLevel["mc_2"].visible = false;
         conLevel["mc_1"].visible = false;
         conLevel["bg"].visible = false;
         conLevel["txt"].visible = false;
         conLevel["plus"].visible = false;
         if(!BitBuffSetClass.getState(23742))
         {
            BitBuffSetClass.setState(23742,1);
            new PlayTalksAction({
               "name":"talk1",
               "type":"talks",
               "value":[[3093,"你倒是很有几分毅力，居然能来到这里。不过到此为止了！就让我亲手埋葬你吧！"]]
            }).doAction();
         }
         KTool.getMultiValue([103294,11332],function(param1:Array):void
         {
            var arr:Array = param1;
            openEvent();
            fightNum = 2 - arr[1];
            arr[0] = KTool.getByte(arr[0],0);
            curLevel = arr[0] / 2;
            if(arr[0] % 2 == 1)
            {
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[3093,"呃啊，你比我想象中要麻烦一些……看来我得休息一下，等会儿再来享受折磨的乐趣了。"]]
               }).doAction().then(function():void
               {
                  conLevel["boss"].visible = false;
                  conLevel["mc_2"].visible = true;
                  conLevel["mc_2"].mouseChildren = false;
                  conLevel["mc_2"].buttonMode = true;
               });
            }
            else
            {
               conLevel["mc_1"].visible = true;
               conLevel["bg"].visible = true;
               conLevel["txt"].visible = true;
               conLevel["plus"].visible = true;
               conLevel["txt"].text = fightNum;
               conLevel["mc_1"].gotoAndStop(int(arr[0] / 2) + 1);
               CommonUI.setEnabled(conLevel["plus"],fightNum <= 0,fightNum > 0);
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
