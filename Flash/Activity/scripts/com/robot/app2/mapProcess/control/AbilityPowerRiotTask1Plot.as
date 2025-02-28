package com.robot.app2.mapProcess.control
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.manager.ItemManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NpcDialogNew_1;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.ui.Mouse;
   
   public class AbilityPowerRiotTask1Plot extends PlotTask
   {
       
      
      private var mc:DisplayObject;
      
      private var taskStep:int;
      
      public function AbilityPowerRiotTask1Plot(param1:MovieClip)
      {
         super(param1);
      }
      
      override protected function onNpcClick(param1:int) : void
      {
         var ok:Function = null;
         var buy:Function = null;
         var cancel:Function = null;
         var npcId:int = param1;
         ok = function():void
         {
            FightManager.fightNoMapBoss("杰内",15080);
         };
         buy = function():void
         {
            KTool.buyProductWithPromise(255206,1).then(function():Promise
            {
               return SocketConnection.sendWithPromise(43306,[27,5]);
            }).then(function():void
            {
               updateState();
            });
         };
         cancel = function():void
         {
         };
         switch(npcId)
         {
            case 1:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[20,"奇怪……走了半天，怎么一只精灵都没遇到过，难道整个异能星都空了？"],[20,"咦，那里好像有只杰里！谢天谢地，总算是见到活人了！","过去看看！"]]
               }).doAction().then(function():void
               {
                  ui["mc"].visible = true;
                  ui["mc"].gotoAndStop(1);
                  ui["arrow_1"].visible = true;
                  CommonUI.setEnabled(ui["npc"],true,false);
               });
               break;
            case 2:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[20,"嗨，杰里！请问……呃，这只杰里怎么看起来怪怪的。"],[3075,"……"],[20,"嗨？哈喽？"],[3075,"深渊……在……召……唤我……","它在嘀咕啥呢？"],[3075,"……"],[20,"它好像有点迷糊，是不是这里太高，它被吓傻了？不行，我得想个办法。","那里有团雪！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43306,[27,2]);
               }).then(this.updateState);
               break;
            case 3:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[3075,"谁！谁？","有反应了！"],[3075,"召唤中止了！不！！"],[3075,"你这个混蛋，我不会放过你！","住手！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43306,[27,4]);
               }).then(this.updateState);
               break;
            case 4:
               NpcDialogNew_1.show(3075,["可恶！我不会放过你！"],["先制服它！","用钻石砸晕它！","躲开"],[ok,buy,cancel]);
               break;
            case 5:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[3075,"我刚才……是怎么了？"],[3075,"我……我怎么变成了这个样子？！我的异能呢？我怎么变色了？呜呜呜……我怎么变成这样了？"],[20,"不要慌，我的心里也有很多不解。你能否告诉我，这里究竟发生了什么？刚才你一副被控制了的样子……"],[3075,"被控制……？我明白了！一定是因为那股力量！","那股力量？什么力量？"],[3075,"几天前，朋友告诉我，异能星中央突然出现了一个裂缝，很多人都啧啧称奇，甚至有的精灵直接跳进了裂缝里，想要一探究竟。"],[3075,"我跑的慢，就没有去凑热闹。但是渐渐地，我总觉得自己受到了冥冥中的召唤，有一种想去那里一探究竟的冲动。"],[3075,"两天前，我终于忍不住了。但是直到我出门后我才知道，原来这个星球上的其他精灵早已向着裂缝出发了，似乎大家都受到了那股力量的召唤。"],[3075,"还是因为我跑得慢，我落在了最后面。这种事情我早就习惯了，我就慢慢地爬啊爬……奇怪，后面发生了什么，我怎么一点印象都没有了。"],[20,"原来如此……受到了召唤了力量？这是怎么回事？哎呀！你怎么了？"],[20,"糟了，它好像昏过去了！我得寻找一些带有异能的东西，让它恢复活力！","回到异能部落里看看吧！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43306,[27,6]);
               }).then(this.updateState);
               break;
            case 6:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[20,"它看起来好像恢复了一些，不过这里的异能能量消失的太多，即使是萃取液也不能让它快速恢复活力。还是再找一些萃取液来吧！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43306,[27,7]);
               }).then(this.updateState);
               break;
            case 7:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[20,"呼……它看起来好多了。"],[20,"不过我刚才已经把所有能采集的异能物质都采集掉了。看来只能等到明天，星球上重新长出新的异能物质，才能继续为其恢复了！","明天再来吧！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43306,[27,8]);
               }).then(this.updateState);
         }
      }
      
      override protected function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var index:int = int(e.target.name.split("_")[1]);
         switch(e.target.name)
         {
            case "close":
               KTool.changeMapWithCallBack(1,function():void
               {
                  ModuleManager.showAppModule("AbilityPowerRiotSub1Panel");
               });
               break;
            case "npc":
               switch(this.taskStep)
               {
                  case 0:
                     SocketConnection.sendWithPromise(43306,[27,1]).then(this.updateState);
                     break;
                  case 4:
                     this.onNpcClick(4);
                     break;
                  case 6:
                     this.onNpcClick(6);
                     break;
                  case 7:
                     this.onNpcClick(7);
               }
               break;
            case "btn":
               if(this.mc == null)
               {
                  StatManager.sendStat2014("0111奇异的能量深渊","点击雪","2019运营活动");
                  ui.mouseEnabled = true;
                  AnimateManager.playMcAnimateWithPromis(ui["mc_1"],1,"mc").then(function():void
                  {
                     ui.mouseEnabled = false;
                     mc = ui["snow"];
                     MovieClip(mc).gotoAndStop(1);
                     Mouse.hide();
                     LevelManager.stage.addEventListener(MouseEvent.MOUSE_MOVE,onMouseMove);
                     LevelManager.stage.addEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
                  });
               }
         }
      }
      
      protected function onShootEndHander(param1:AimatEvent) : void
      {
         if(ui["npc"].hitTestPoint(param1.info.endPos.x,param1.info.endPos.y))
         {
            StatManager.sendStat2014("0111奇异的能量深渊","用雪击中杰内","2019运营活动");
            LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.onMouseMove);
            LevelManager.stage.removeEventListener(MouseEvent.MOUSE_DOWN,this.onMouseDown);
            if(this.mc.parent)
            {
               this.mc.parent.removeChild(this.mc);
            }
            Mouse.show();
            this.mc = null;
            ui["mc"].visible = false;
            SocketConnection.sendWithPromise(43306,[27,3]).then(this.updateState);
         }
      }
      
      protected function onMouseMove(param1:MouseEvent) : void
      {
         if(this.mc != null)
         {
            this.mc.x = param1.stageX;
            this.mc.y = param1.stageY;
         }
      }
      
      protected function onMouseDown(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(e.target.name == "npc")
         {
            ui["ani"].visible = true;
            AnimateManager.playMcAnimateWithPromis(ui,1,"ani").then(function():void
            {
               ui["ani"].visible = false;
               StatManager.sendStat2014("0111奇异的能量深渊","用雪击中杰内","2019运营活动");
               LevelManager.stage.removeEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
               LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,onMouseMove);
               if(mc.parent)
               {
                  mc.parent.removeChild(mc);
               }
               Mouse.show();
               mc = null;
               ui["mc"].visible = false;
               ui["mc_1"].gotoAndStop(1);
               SocketConnection.sendWithPromise(43306,[27,3]).then(updateState);
            });
         }
      }
      
      override protected function updateState() : void
      {
         var needItem:int = 0;
         ui["ani"].visible = false;
         KTool.getMultiValue([104686],function(param1:Array):void
         {
            var arr:Array = param1;
            ItemManager.updateAndGetItemsNum([1719017],function(param1:Array):void
            {
               var num:Array = param1;
               needItem = 4 - KTool.getByte(arr[0],1);
               taskStep = KTool.getByte(arr[0],0);
               ui["mc_1"].gotoAndStop(1);
               MapManager.currentMap.controlLevel["door"].visible = taskStep >= 6;
               MapManager.currentMap.controlLevel["hit"].visible = taskStep >= 6;
               switch(taskStep)
               {
                  case 0:
                     StatManager.sendStat2014("0111奇异的能量深渊","开始首日剧情","2019运营活动");
                     ui["mc"].visible = false;
                     ui["arrow_1"].visible = false;
                     CommonUI.setEnabled(ui["npc"],false,false);
                     onNpcClick(1);
                     break;
                  case 1:
                     ui["mc"].visible = false;
                     ui["arrow_1"].visible = false;
                     CommonUI.setEnabled(ui["npc"],false,false);
                     onNpcClick(2);
                     break;
                  case 2:
                     ui["mc"].visible = true;
                     ui["mc"].gotoAndStop(2);
                     ui["mc_1"].gotoAndStop(2);
                     ui["arrow_1"].visible = false;
                     CommonUI.setEnabled(ui["npc"],true,false);
                     break;
                  case 3:
                     ui["mc"].visible = false;
                     ui["mc_1"].gotoAndStop(1);
                     ui["arrow_1"].visible = false;
                     CommonUI.setEnabled(ui["npc"],false,false);
                     onNpcClick(3);
                     break;
                  case 4:
                     ui["mc"].visible = true;
                     ui["mc"].gotoAndStop(3);
                     ui["arrow_1"].visible = true;
                     CommonUI.setEnabled(ui["npc"],true,false);
                     break;
                  case 5:
                     ui["mc"].visible = false;
                     ui["arrow_1"].visible = false;
                     CommonUI.setEnabled(ui["npc"],false,false);
                     onNpcClick(5);
                     break;
                  case 6:
                     ui["mc"].visible = true;
                     ui["mc"].gotoAndStop(4);
                     ui["arrow_1"].visible = false;
                     if(num[0] > 0)
                     {
                        CommonUI.setEnabled(ui["npc"],true,false);
                     }
                     else
                     {
                        CommonUI.setEnabled(ui["npc"],false,false);
                     }
                     break;
                  case 7:
                     ui["mc"].visible = true;
                     ui["mc"].gotoAndStop(5);
                     MovieClip(ui["mc"]).addEventListener(Event.FRAME_CONSTRUCTED,function(param1:Event):void
                     {
                        param1.currentTarget.removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
                        ui["mc"]["txt"].text = needItem;
                     });
                     ui["arrow_1"].visible = false;
                     if(num[0] > 0)
                     {
                        CommonUI.setEnabled(ui["npc"],true,false);
                     }
                     else
                     {
                        CommonUI.setEnabled(ui["npc"],false,false);
                     }
                     break;
                  case 8:
                     ui["mc"].visible = false;
                     ui["mc"].gotoAndStop(6);
                     ui["arrow_1"].visible = false;
                     CommonUI.setEnabled(ui["npc"],false,false);
                     KTool.changeMapWithCallBack(1,function():void
                     {
                        ModuleManager.showAppModule("AbilityPowerRiotSub1Panel");
                     });
               }
            });
         });
      }
      
      override public function destroy() : void
      {
         if(this.mc != null)
         {
            LevelManager.stage.removeEventListener(MouseEvent.MOUSE_MOVE,this.onMouseMove);
            LevelManager.stage.removeEventListener(MouseEvent.MOUSE_DOWN,this.onMouseDown);
            if(this.mc.parent)
            {
               this.mc.parent.removeChild(this.mc);
            }
            Mouse.show();
            this.mc = null;
         }
         super.destroy();
      }
   }
}
