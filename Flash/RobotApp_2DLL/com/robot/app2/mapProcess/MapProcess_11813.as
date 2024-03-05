package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.activityHelper.actions.BuyItemAction;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.app2.control.activityHelper.actions.SendFightAction;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
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
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class MapProcess_11813 extends BaseMapProcess
   {
      
      public static var lastMap:int;
       
      
      private var curBall:Sprite;
      
      private var curMap:int;
      
      private var curEnergy:int;
      
      private var curHasBall:int;
      
      private var hasTransferNum:int;
      
      private var doors:Array;
      
      private var hasUseGrass:Boolean;
      
      private var hasBall:Array;
      
      private var npcIds:Array;
      
      private var dialogIds:Array;
      
      public function MapProcess_11813()
      {
         this.npcIds = [3522,3374,3348,3599,3733,3616,3332,3716];
         this.dialogIds = [2840,2761,3096,2873,2956,3097,2750,3098];
         super();
      }
      
      override protected function init() : void
      {
         StatManager.sendStat2014("0215噬梦之灵超进化","进入梦境场景","2019运营活动");
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11813;
         MapController.forceChange = true;
         ToolBarController.panel.visible = false;
         KTool.hideMapPlayerAndMonster();
         topLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         depthLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.curBall = new Sprite();
         MainManager.actorModel.TopIcon.addChild(this.curBall);
         this.curBall.x = 0;
         this.curBall.y = 0;
         this.update();
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         var str:String = String(e.target.name);
         index = int(e.target.name.split("_")[1]);
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
            case "mc_1":
               MainManager.actorModel.moveAndAction(new Point(e.stageX,e.stageY),function():void
               {
                  index = MovieClip(e.target).currentFrame;
                  NpcDialogNew_1.show(dialogIds[index - 1],["你将迷失在这场梦境中，直至被吞噬！"],["我一定会离开这里！","看我先用钻石砸晕你！","暂时不管你。"],[function():void
                  {
                     new SendFightAction({
                        "type":"sendfight",
                        "cmdId":"43767",
                        "args":["14","1"]
                     }).doAction(null).then(function():void
                     {
                        if(FightManager.isWin)
                        {
                           Alarm.show("恭喜你获得了30点灵魂能量！");
                        }
                     });
                  },function():void
                  {
                     new BuyItemAction({
                        "name":"buyItem",
                        "num":1,
                        "type":"buy",
                        "productID":"255411",
                        "itemID":"1719273",
                        "cmdId":"43767",
                        "args":[15,5]
                     }).doAction(null).then(function():void
                     {
                        Alarm.show("恭喜你获得了30点灵魂能量！");
                        update();
                     });
                  }]);
               });
               break;
            case "mc_2":
               index = MovieClip(e.target).currentFrame;
               if(index > 1)
               {
                  MainManager.actorModel.moveAndAction(new Point(e.stageX,e.stageY),function():void
                  {
                     if(curHasBall > 0)
                     {
                        Alarm.show("你当前你已经携带着一种晶球了！");
                     }
                     else
                     {
                        SocketConnection.sendWithPromise(43767,[14,1]).then(update);
                     }
                  });
               }
               break;
            case "mc_3":
               index = MovieClip(e.target).currentFrame;
               if(index % 2 == 1)
               {
                  index = (index + 1) / 2;
                  MainManager.actorModel.moveAndAction(new Point(e.stageX,e.stageY),function():void
                  {
                     if(curHasBall == index)
                     {
                        if(e.target["ani"] != null)
                        {
                           AnimateManager.playMcAnimate(e.target as MovieClip,MovieClip(e.target).currentFrame,"ani",function():void
                           {
                              SocketConnection.sendWithPromise(43767,[14,1]).then(update);
                           });
                        }
                        else
                        {
                           SocketConnection.sendWithPromise(43767,[14,1]).then(update);
                        }
                     }
                     else if(curHasBall != 0)
                     {
                        Alarm.show("必须使用与其颜色一致的晶球才能激活！");
                     }
                  });
               }
               break;
            case "mc1_" + index:
               MainManager.actorModel.moveAndAction(new Point(e.stageX,e.stageY),function():void
               {
                  if(curEnergy >= 6)
                  {
                     SocketConnection.sendWithPromise(43767,[14,1 + index]).then(function():void
                     {
                        lastMap = doors[index - 1];
                        MapManager.refMap();
                     });
                  }
                  else
                  {
                     Alert.show("你的灵魂能量已经耗尽，是否重新开始挑战此关卡？",function():void
                     {
                        SocketConnection.sendWithPromise(43767,[18,1]).then(function():void
                        {
                           MapManager.changeMapWithCallback(ServerMapsXMLInfo.getLoginMapId(2),function():void
                           {
                              ModuleManager.showAppModule("EatDreamSpriteEvoSub2Panel");
                           });
                        });
                     });
                  }
               });
               break;
            case "btn_1":
               MainManager.actorModel.moveAndAction(new Point(e.stageX,e.stageY),function():void
               {
                  if(hasUseGrass)
                  {
                     Alarm.show("梦境草每天仅能使用一株！");
                  }
                  else
                  {
                     SocketConnection.sendWithPromise(43767,[14,6]).then(function():void
                     {
                        Alarm.show("恭喜你获得了50点灵魂能量！");
                        update();
                     });
                  }
               });
               break;
            case "reset":
               SocketConnection.sendWithPromise(43767,[18,1]).then(function():void
               {
                  MapManager.changeMapWithCallback(ServerMapsXMLInfo.getLoginMapId(2),function():void
                  {
                     ModuleManager.showAppModule("EatDreamSpriteEvoSub2Panel");
                  });
               });
               break;
            case "plus":
               new BuyItemAction({
                  "name":"buyItem",
                  "num":1,
                  "type":"buy",
                  "productID":"255448",
                  "itemID":"1719318",
                  "cmdId":"43767",
                  "args":[18,2]
               }).doAction(null).then(function():void
               {
                  Alarm.show("恭喜你获得了30点灵魂能量！");
                  update();
               });
         }
      }
      
      protected function update() : void
      {
         var count:int = 0;
         this.doors = new Array();
         this.hasBall = new Array();
         depthLevel["mc_1"].visible = false;
         depthLevel["mc_2"].visible = false;
         depthLevel["mc_3"].visible = false;
         depthLevel["btn_1"].visible = false;
         depthLevel["mc"].mouseEnabled = false;
         depthLevel["mc"].mouseChildren = false;
         depthLevel["ballMc"].visible = false;
         this.closeEvent();
         KTool.getMultiValue([103294,103295],function(param1:Array):void
         {
            var i:int;
            var arr:Array = param1;
            curMap = arr[0] & 255;
            curEnergy = arr[0] >> 8 & 255;
            curHasBall = arr[0] >> 16 & 255;
            hasTransferNum = arr[0] >> 24 & 255;
            topLevel["txt_1"].text = curEnergy;
            if(curEnergy >= 100)
            {
               topLevel["scrollMc"].gotoAndStop(1);
            }
            else
            {
               topLevel["scrollMc"].gotoAndStop(100 - curEnergy);
            }
            count = 0;
            i = 1;
            while(i <= 4)
            {
               if(KTool.getBit(arr[1],i) == 1)
               {
                  hasBall[i - 1] = 1;
                  ++count;
                  topLevel["mc_" + i].gotoAndStop(2);
               }
               else
               {
                  hasBall[i - 1] = 0;
                  topLevel["mc_" + i].gotoAndStop(1);
               }
               i++;
            }
            curBall.removeChildren();
            if(curHasBall > 0)
            {
               depthLevel["ballMc"].visible = true;
               depthLevel["ballMc"].gotoAndStop(curHasBall);
               curBall.addChild(depthLevel["ballMc"]);
               depthLevel["ballMc"].x = 0;
               depthLevel["ballMc"].y = 0;
            }
            if(count >= 4)
            {
               onNpcClick(1);
               return;
            }
            if(curMap <= 0)
            {
               openEvent();
               return;
            }
            KTool.getMultiValue([103296 + int((curMap - 1) / 4),103309 + curMap - 1,103360 + int((curMap - 1) / 32)],function(param1:Array):void
            {
               var i:int;
               var arr:Array = param1;
               arr[0] = KTool.getByte(arr[0],(curMap - 1) % 4);
               if(arr[0] < 5)
               {
                  if(arr[0] > 0)
                  {
                     depthLevel["mc_2"].visible = true;
                     depthLevel["mc_2"].mouseChildren = false;
                     depthLevel["mc_2"].buttonMode = true;
                     if(curHasBall == arr[0] || hasBall[arr[0] - 1] == 1)
                     {
                        depthLevel["mc_2"].gotoAndStop(1);
                     }
                     else
                     {
                        depthLevel["mc_2"].gotoAndStop(arr[0] + 1);
                     }
                  }
               }
               else if(arr[0] < 9)
               {
                  depthLevel["mc_3"].visible = true;
                  depthLevel["mc_3"].mouseChildren = false;
                  depthLevel["mc_3"].buttonMode = true;
                  if(hasBall[arr[0] - 5] == 1)
                  {
                     depthLevel["mc_3"].gotoAndStop((arr[0] - 5) * 2 + 2);
                  }
                  else
                  {
                     depthLevel["mc_3"].gotoAndStop((arr[0] - 5) * 2 + 1);
                  }
               }
               else
               {
                  depthLevel["mc_1"].visible = true;
                  depthLevel["mc_1"].mouseChildren = false;
                  depthLevel["mc_1"].buttonMode = true;
                  depthLevel["mc_1"].gotoAndStop(arr[0] - 8);
               }
               i = 1;
               while(i <= 4)
               {
                  doors[i - 1] = KTool.getByte(arr[1],i - 1);
                  depthLevel["mc1_" + i].visible = doors[i - 1] != 0;
                  depthLevel["mc1_" + i].mouseChildren = false;
                  depthLevel["mc1_" + i].buttonMode = true;
                  if(doors[i - 1] == lastMap && lastMap != 0)
                  {
                     MainManager.actorModel.pos = new Point(depthLevel["mc1_" + i].x,depthLevel["mc1_" + i].y);
                     lastMap = 0;
                  }
                  i++;
               }
               depthLevel["btn_1"].visible = KTool.getBit(arr[2],(curMap - 1) % 32 + 1) == 1;
               KTool.getBitSet([1000426],function(param1:Array):void
               {
                  openEvent();
                  hasUseGrass = param1[0];
               });
            });
         });
      }
      
      protected function closeEvent() : void
      {
         depthLevel.mouseChildren = false;
         depthLevel.mouseEnabled = false;
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
      }
      
      protected function openEvent() : void
      {
         depthLevel.mouseChildren = true;
         depthLevel.mouseEnabled = true;
         topLevel.mouseChildren = true;
         topLevel.mouseEnabled = true;
      }
      
      protected function onNpcClick(param1:int) : void
      {
         var npcId:int = param1;
         this.closeEvent();
         switch(npcId)
         {
            case 1:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[3093,"你居然破解了我的灵魂梦境！那你一定很渴望看到真实的这里吧……不过你要明白，有时候梦境反而会显得可爱一些……"],[3093,"那我就让你如愿以偿！"]]
               }).doAction().then(function():void
               {
                  MapManager.changeMap(11814);
               });
         }
      }
      
      override public function destroy() : void
      {
         MainManager.actorModel.TopIcon.removeChild(this.curBall);
         topLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         depthLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         ToolBarController.panel.visible = true;
         MapController.forceChange = false;
         KTool.showMapPlayerAndMonster();
         super.destroy();
      }
   }
}
