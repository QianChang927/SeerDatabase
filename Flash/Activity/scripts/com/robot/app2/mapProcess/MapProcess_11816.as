package com.robot.app2.mapProcess
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.activityHelper.actions.BuyItemAction;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.app2.control.activityHelper.actions.SendFightAction;
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
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.events.MouseEvent;
   
   public class MapProcess_11816 extends BaseMapProcess
   {
      
      public static var LastFight:int = -1;
       
      
      private var curLevel:int;
      
      private var leftHhNum:int;
      
      private var curBoss:int;
      
      private var totalHh:Array;
      
      private var bossLen:Array;
      
      public function MapProcess_11816()
      {
         this.totalHh = [10,12,15];
         this.bossLen = [3,5,8];
         super();
      }
      
      override protected function init() : void
      {
         StatManager.sendStat2014("0215噬梦之灵超进化","进入第三关第二阶段场景","2019运营活动");
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11816;
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
            case "boss_" + index:
               this.curBoss = index;
               this.showTipsPanel();
               break;
            case "fight_1":
               topLevel["tipsPanel"].visible = false;
               new SendFightAction({
                  "type":"sendfight",
                  "cmdId":"43767",
                  "args":["17",this.curBoss]
               }).doAction(null).then(function():void
               {
                  LastFight = curLevel;
               });
               break;
            case "onekey_1":
               new BuyItemAction({
                  "num":1,
                  "type":"buy",
                  "productID":255417 + this.curLevel - 1,
                  "itemID":1719279 + this.curLevel - 1
               }).doAction().then(function():Promise
               {
                  LastFight = curLevel;
                  return SocketConnection.sendWithPromise(43767,[15,6 + curBoss]);
               }).then(this.update);
               break;
            case "onekey_2":
               new BuyItemAction({
                  "num":1,
                  "type":"buy",
                  "productID":255449 + this.curLevel - 1,
                  "itemID":1719319 + this.curLevel - 1
               }).doAction().then(function():Promise
               {
                  LastFight = curLevel;
                  return SocketConnection.sendWithPromise(43767,[18,3]);
               }).then(this.update);
               break;
            case "mc_2":
               MapManager.changeMap(11816);
               break;
            case "tipsClose":
               this.update();
         }
      }
      
      protected function showTipsPanel() : void
      {
         topLevel["tipsPanel"].visible = true;
         topLevel["tipsPanel"]["mc"].gotoAndStop(this.curBoss);
      }
      
      protected function update() : void
      {
         var i:int;
         this.closeEvent();
         topLevel["tipsPanel"].visible = false;
         i = 8;
         while(i > 0)
         {
            conLevel["boss_" + i].visible = false;
            conLevel["txt_" + i].visible = false;
            i--;
         }
         if(!BitBuffSetClass.getState(23743))
         {
            BitBuffSetClass.setState(23743,1);
            new PlayTalksAction({
               "name":"talk1",
               "type":"talks",
               "value":[[3093,"放弃吧，可笑的蠢货！你是不可能找到我的！当我休息完毕，你就会被我的杀死，我要把你炼制成我梦境奴仆中的一员！","我会找到你的！"]]
            }).doAction();
         }
         KTool.getMultiValue([103294,103295,103293],function(param1:Array):void
         {
            var i:int = 0;
            var arr:Array = param1;
            openEvent();
            curLevel = KTool.getByte(arr[0],0);
            if(arr[2] >= 3)
            {
               Alarm.show("恭喜你成功通过这一关！",function():void
               {
                  MapManager.changeMapWithCallback(ServerMapsXMLInfo.getLoginMapId(2),function():void
                  {
                     ModuleManager.showAppModule("EatDreamSpriteEvoMainPanel");
                  });
               });
            }
            else
            {
               if(curLevel % 2 == 0)
               {
                  curLevel /= 2;
                  if(LastFight >= curLevel)
                  {
                     new PlayTalksAction({
                        "name":"talk1",
                        "type":"talks",
                        "value":[[3093,"不！你居然能找到我！好在我已经恢复的差不多了，你不会再有战胜我的机会了！"]]
                     }).doAction().then(function():void
                     {
                        MapManager.changeMap(11815);
                     });
                  }
                  else
                  {
                     new PlayTalksAction({
                        "name":"talk1",
                        "type":"talks",
                        "value":[[3093,"蠢货，你无法阻止我！但我改变了我的想法，我想再欣赏一下你努力的样子……这很有趣。"]]
                     }).doAction().then(function():void
                     {
                        MapManager.changeMap(11815);
                     });
                  }
                  LastFight = -1;
                  return;
               }
               curLevel = (curLevel + 1) / 2;
               leftHhNum = totalHh[curLevel - 1] - KTool.getByte(arr[1],0);
               topLevel["txt_1"].text = leftHhNum;
               i = 8;
               while(i > 0)
               {
                  if(i > bossLen[curLevel - 1])
                  {
                     conLevel["boss_" + i].visible = false;
                     conLevel["txt_" + i].visible = false;
                  }
                  else if(KTool.getBit(arr[1],8 + i) == 1)
                  {
                     conLevel["boss_" + i].visible = false;
                     conLevel["txt_" + i].visible = false;
                  }
                  else
                  {
                     conLevel["boss_" + i].visible = true;
                     conLevel["txt_" + i].visible = true;
                  }
                  i--;
               }
               if(LastFight >= 0)
               {
                  new PlayTalksAction({
                     "name":"talk1",
                     "type":"talks",
                     "value":[[3093,"继续，继续！我很快就会恢复，你将迎来你的末日！"]]
                  }).doAction();
               }
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
