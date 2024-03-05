package com.robot.app2.mapProcess
{
   import com.codecatalyst.promise.Promise;
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.xml.ServerMapsXMLInfo;
   import com.robot.core.controller.MapController;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObjectContainer;
   import flash.events.MouseEvent;
   
   public class MapProcess_11805 extends BaseMapProcess
   {
       
      
      private var curTask:int;
      
      private var completeNum:int;
      
      private var taskStep:int;
      
      private var taskState:int;
      
      private var _ui:DisplayObjectContainer;
      
      private var awards:Array;
      
      private var npcIds:Array;
      
      public function MapProcess_11805()
      {
         this.awards = [1,1,2,3,5,7,9,12,12,12,12];
         this.npcIds = [3907,3945,3987,3991];
         super();
      }
      
      override protected function init() : void
      {
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11805;
         MapController.forceChange = true;
         ToolBarController.panel.visible = false;
         KTool.hideMapPlayerAndMonster();
         this._ui = btnLevel;
         this._ui.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         switch(str)
         {
            case "btn":
               FightManager.fightNoMapBoss("",15190 + this.curTask);
               break;
            case "close":
               MapManager.changeMapWithCallback(ServerMapsXMLInfo.getLoginMapId(2),function():void
               {
                  ModuleManager.showAppModule("FinalBattleMainPanel");
               });
               break;
            case "bag":
               PetBagControllerNew.showByBuffer();
               break;
            case "cure":
               PetManager.cureAllFree();
         }
      }
      
      protected function update() : void
      {
         this.updateState(0);
         this._ui["aniMc"].visible = false;
         KTool.getMultiValue([10601,10602],function(param1:Array):void
         {
            var arr:Array = param1;
            curTask = arr[0] >> 4 & 15;
            taskStep = arr[0] >> 8 & 15;
            completeNum = arr[0] & 15;
            taskState = arr[1];
            if(completeNum >= 10)
            {
               _ui["txt1_1"].text = "10/10";
            }
            else
            {
               _ui["txt1_1"].text = int(completeNum + 1) + "/10";
            }
            _ui["txt1_2"].text = "x" + awards[completeNum];
            if(completeNum >= 10)
            {
               Alarm.show("今天的战斗就此告一段落，明天再来吧！",function():void
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showAppModule("FinalBattleMainPanel");
                  });
               });
               return;
            }
            if(curTask == 0)
            {
               onNpcClick(1);
            }
            else
            {
               if(taskStep == 0)
               {
                  SocketConnection.sendWithPromise(43307,[3,1]).then(update);
                  return;
               }
               if(taskStep == 1)
               {
                  onNpcClick([2,2,5,7,9,11,13,15][curTask - 1]);
               }
               else if(taskStep == 2)
               {
                  updateState(curTask);
               }
               else if(taskStep == 3)
               {
                  onNpcClick([3,4,6,8,10,12,14,16][curTask - 1]);
               }
            }
         });
      }
      
      protected function updateState(param1:int) : void
      {
         var _loc2_:int = 0;
         switch(param1)
         {
            case 0:
               _loc2_ = 1;
               while(_loc2_ <= 4)
               {
                  this._ui["mc_" + _loc2_].gotoAndStop(1);
                  this._ui["bg_" + _loc2_].visible = false;
                  this._ui["txt_" + _loc2_].visible = false;
                  _loc2_++;
               }
               this._ui["mc"].visible = false;
               break;
            case 1:
               this._ui["mc_3"].gotoAndStop(2);
               this._ui["mc"].visible = true;
               this._ui["mc"].gotoAndStop(1);
               break;
            case 2:
               this._ui["mc_4"].gotoAndStop(2);
               this._ui["mc"].visible = true;
               this._ui["mc"].gotoAndStop(2);
               break;
            case 3:
               this._ui["mc_3"].gotoAndStop(2);
               this._ui["mc"].visible = true;
               this._ui["mc"].gotoAndStop(3);
               this._ui["bg_3"].visible = true;
               this._ui["txt_3"].visible = true;
               this._ui["txt_3"].text = this.taskState + "/5000";
               break;
            case 4:
               this._ui["mc_4"].gotoAndStop(2);
               this._ui["mc"].visible = true;
               this._ui["mc"].gotoAndStop(4);
               this._ui["bg_4"].visible = true;
               this._ui["txt_4"].visible = true;
               this._ui["txt_4"].text = this.taskState + "/5000";
               break;
            case 5:
               this._ui["mc_3"].gotoAndStop(2);
               this._ui["mc_4"].gotoAndStop(2);
               this._ui["mc"].visible = true;
               this._ui["mc"].gotoAndStop(5);
               break;
            case 6:
               this._ui["mc_3"].gotoAndStop(2);
               this._ui["mc_4"].gotoAndStop(2);
               this._ui["mc"].visible = true;
               this._ui["mc"].gotoAndStop(6);
               break;
            case 7:
               this._ui["mc_1"].gotoAndStop(2);
               this._ui["mc"].visible = true;
               this._ui["mc"].gotoAndStop(7);
               this._ui["bg_1"].visible = true;
               this._ui["txt_1"].visible = true;
               this._ui["txt_1"].text = this.taskState + "/5000";
               break;
            case 8:
               this._ui["mc_2"].gotoAndStop(2);
               this._ui["mc"].visible = true;
               this._ui["mc"].gotoAndStop(8);
               this._ui["bg_2"].visible = true;
               this._ui["txt_2"].visible = true;
               this._ui["txt_2"].text = this.taskState + "/5000";
         }
      }
      
      protected function onNpcClick(param1:int) : void
      {
         var npcHeand:int = 0;
         var npcId:int = param1;
         this.closeEvent();
         switch(npcId)
         {
            case 1:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcIds[0],"勇士，你终于来了！这场关键的战争已经进入白热化，我们急需你的帮助！","有什么需要帮忙的吗？"],[this.npcIds[1],"战场瞬息万变，我们需要一个变化！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,1]).then(update);
               }).then(this.openEvent);
               break;
            case 2:
               this._ui["aniMc"].visible = true;
               AnimateManager.playMcAnimateWithPromis(this._ui["aniMc"],1,"ani").then(function():Promise
               {
                  _ui["aniMc"].visible = false;
                  return new PlayTalksAction({
                     "name":"talk1",
                     "type":"talks",
                     "value":[[npcIds[0],"这两人与我们势均力敌，唯有趁他们不注意，猛攻其中一人，令其丧失战斗力，才能打破僵局。"],[npcIds[1],"勇士，我们需要你协助我们，向混沌•阿内斯发起进攻，直至将其击败为止！","没问题。"]]
                  }).doAction();
               }).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,2]).then(update);
               }).then(this.openEvent);
               break;
            case 3:
            case 4:
               npcHeand = npcId == 3 ? int(this.npcIds[2]) : int(this.npcIds[3]);
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcIds[2],"哼，你们真当我如此愚蠢吗？在我有所准备的情况下，即使所有人齐上，我也撑得住！","可恶……"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,1]).then(update);
               }).then(this.openEvent);
               break;
            case 5:
               this._ui["aniMc"].visible = true;
               AnimateManager.playMcAnimateWithPromis(this._ui["aniMc"],1,"ani").then(function():Promise
               {
                  _ui["aniMc"].visible = false;
                  return new PlayTalksAction({
                     "name":"talk1",
                     "type":"talks",
                     "value":[[npcIds[2],"糟了，刚才的一击消耗了我太多了力量……"],[npcIds[1],"就是现在！将其一击击倒！"],[npcIds[2],"啊！","阿内斯！"],[npcIds[3],"你稍微休息一下，我来拦住它们……可恶！我跟你们拼了！"],[npcIds[0],"欧维帕德发狂了！勇士，与我们一起，拦住他！","没问题。"]]
                  }).doAction();
               }).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,2]).then(update);
               }).then(this.openEvent);
               break;
            case 6:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcIds[3],"我……我要撑不住了，阿内斯，你还没好吗？"],[this.npcIds[2],"虽然还有点痛，但是应该没有大碍了。这些家伙，我要让他们血债血偿！","哼！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,1]).then(update);
               }).then(this.openEvent);
               break;
            case 7:
               this._ui["aniMc"].visible = true;
               AnimateManager.playMcAnimateWithPromis(this._ui["aniMc"],1,"ani").then(function():Promise
               {
                  _ui["aniMc"].visible = false;
                  return new PlayTalksAction({
                     "name":"talk1",
                     "type":"talks",
                     "value":[[npcIds[3],"你们以为这种力量我会放在眼里吗？你们也太狂妄了些……","欧维帕德，小心！"],[npcIds[3],"啊！","欧维帕德！"],[npcIds[2],"你们这些混蛋，居然敢使诈！欧维帕德，我来拦住它们，你抓紧时间恢复！"],[npcIds[1],"阿内斯发狂了！勇士，与我们一起，拦住他！","没问题。"]]
                  }).doAction();
               }).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,2]).then(update);
               }).then(this.openEvent);
               break;
            case 8:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcIds[2]," 欧维帕德，你再不来，我要被打死了！ "],[this.npcIds[3],"来吧，让这些家伙明白一下，什么才是真正的阴险！","哼！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,1]).then(update);
               }).then(this.openEvent);
               break;
            case 9:
               this._ui["aniMc"].visible = true;
               AnimateManager.playMcAnimateWithPromis(this._ui["aniMc"],1,"ani").then(function():Promise
               {
                  _ui["aniMc"].visible = false;
                  return new PlayTalksAction({
                     "name":"talk1",
                     "type":"talks",
                     "value":[[npcIds[0],"毁灭，我觉得……有点不对劲……"],[npcIds[3],"哈哈哈，炼狱，你是不是觉得力气用不出来？是不是觉得自己反应总是慢一拍？"],[npcIds[1],"是毒！炼狱，你中毒了！"],[npcIds[2],"机会来了，欧维帕德！一举击溃他们！"],[npcIds[1],"勇士，请帮帮我！","没问题。"]]
                  }).doAction();
               }).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,2]).then(update);
               }).then(this.openEvent);
               break;
            case 10:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcIds[0],"呼……我好多了。想不到他们竟用如此卑鄙的手段。 "],[this.npcIds[0],"辛苦你了，小赛尔，接下来就交给我吧！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,1]).then(update);
               }).then(this.openEvent);
               break;
            case 11:
               this._ui["aniMc"].visible = true;
               AnimateManager.playMcAnimateWithPromis(this._ui["aniMc"],1,"ani").then(function():Promise
               {
                  _ui["aniMc"].visible = false;
                  return new PlayTalksAction({
                     "name":"talk1",
                     "type":"talks",
                     "value":[[npcIds[1],"啊！"],[npcIds[0],"毁灭！……你受伤了！站到我身后，我帮你挡住他们！","一时大意……我会尽快疗伤的。"],[npcIds[3],"好机会！欧维帕德，全力进攻！"],[npcIds[0],"勇士，我需要你的帮助！","没问题。"]]
                  }).doAction();
               }).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,2]).then(update);
               }).then(this.openEvent);
               break;
            case 12:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcIds[1],"好强大的力量，我居然会伤在你们这些小虫子手上！准备迎接我的怒火吧！ ","业咒不苦，唯吾成王！"]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,1]).then(update);
               }).then(this.openEvent);
               break;
            case 13:
               this._ui["aniMc"].visible = true;
               AnimateManager.playMcAnimateWithPromis(this._ui["aniMc"],1,"ani").then(function():Promise
               {
                  _ui["aniMc"].visible = false;
                  return new PlayTalksAction({
                     "name":"talk1",
                     "type":"talks",
                     "value":[[npcIds[0],"不好！……啊！","毁灭！"],[npcIds[0],"可恶，伤到了关节……"],[npcIds[1],"长时间战斗，我们都很疲惫了。你稍微休息一下，我们再继续并肩战斗！"],[npcIds[0],"辛苦你了，毁灭！勇士，能不能帮帮我？","没问题。"]]
                  }).doAction();
               }).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,2]).then(update);
               }).then(this.openEvent);
               break;
            case 14:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcIds[0],"啊……舒服！我感觉自己再次充满了力气！ "]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,1]).then(update);
               }).then(this.openEvent);
               break;
            case 15:
               this._ui["aniMc"].visible = true;
               AnimateManager.playMcAnimateWithPromis(this._ui["aniMc"],1,"ani").then(function():Promise
               {
                  _ui["aniMc"].visible = false;
                  return new PlayTalksAction({
                     "name":"talk1",
                     "type":"talks",
                     "value":[[npcIds[1],"可恶啊，终究是年纪大了吗……"],[npcIds[0],"毁灭！你还好吗？"],[npcIds[1],"炼狱，我需要休息。我……有点累，对不起……"],[npcIds[0],"放心，这里交给我！勇士，快去帮帮他！","没问题！"]]
                  }).doAction();
               }).then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,2]).then(update);
               }).then(this.openEvent);
               break;
            case 16:
               new PlayTalksAction({
                  "name":"talk1",
                  "type":"talks",
                  "value":[[this.npcIds[1],"辛苦你了，毁灭！欧维帕德，你的对手是我！ "]]
               }).doAction().then(function():Promise
               {
                  return SocketConnection.sendWithPromise(43307,[3,1]).then(update);
               }).then(this.openEvent);
         }
      }
      
      protected function closeEvent() : void
      {
         this._ui.mouseChildren = this._ui.mouseEnabled = false;
      }
      
      protected function openEvent() : void
      {
         this._ui.mouseChildren = this._ui.mouseEnabled = true;
      }
      
      override public function destroy() : void
      {
         this._ui.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         ToolBarController.panel.visible = true;
         MapController.forceChange = false;
         KTool.showMapPlayerAndMonster();
         super.destroy();
      }
   }
}
