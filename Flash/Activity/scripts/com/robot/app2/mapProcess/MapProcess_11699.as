package com.robot.app2.mapProcess
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import flash.display.MovieClip;
   import flash.events.Event;
   
   public class MapProcess_11699 extends BaseMapProcess
   {
       
      
      private var state:int;
      
      private var task1:RomanticTask1;
      
      private var task2:RomanticTask2;
      
      private var task3:RomanticTask3;
      
      public function MapProcess_11699()
      {
         super();
         MapObjectControl.hideOrShowAllObjects(false);
         MainManager.actorInfo.mapID = 11669;
      }
      
      override protected function init() : void
      {
         LevelManager.iconLevel.visible = false;
         MainManager.actorInfo.mapID = 11669;
         KTool.hideMapPlayerAndMonster();
         ToolBarController.panel.visible = false;
         this.update();
      }
      
      protected function update() : void
      {
         KTool.getMultiValue([14579],function(param1:Array):void
         {
            var arr:Array = param1;
            MovieClip(conLevel).gotoAndStop(arr[0] + 1);
            if(arr[0] == 3)
            {
               KTool.changeMapWithCallBack(1,function():void
               {
                  ModuleManager.showAppModule("RomanticAmusementParkMainPanel");
               });
            }
            else
            {
               MovieClip(conLevel["mc"]).addEventListener(Event.FRAME_CONSTRUCTED,function(param1:Event):void
               {
                  param1.target.removeEventListener(Event.FRAME_CONSTRUCTED,arguments.callee);
                  if(arr[0] == 0)
                  {
                     task1 = new RomanticTask1(conLevel["mc"]);
                  }
                  else if(arr[0] == 1)
                  {
                     task2 = new RomanticTask2(conLevel["mc"]);
                  }
                  else if(arr[0] == 2)
                  {
                     task3 = new RomanticTask3(conLevel["mc"]);
                  }
               });
            }
         });
      }
      
      override public function destroy() : void
      {
         if(this.task1 != null)
         {
            this.task1.destroy();
         }
         if(this.task2 != null)
         {
            this.task2.destroy();
         }
         if(this.task3 != null)
         {
            this.task3.destroy();
         }
         this.task1 = null;
         this.task2 = null;
         this.task3 = null;
         LevelManager.iconLevel.visible = true;
         MapObjectControl.hideOrShowAllObjects(true);
         KTool.showMapPlayerAndMonster();
         ToolBarController.panel.visible = true;
         super.destroy();
      }
   }
}

import com.codecatalyst.promise.Deferred;
import com.codecatalyst.promise.Promise;
import com.robot.app.fight.FightManager;
import com.robot.app.task.petstory.util.KTool;
import com.robot.app.toolBar.ToolBarController;
import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
import com.robot.core.manager.MainManager;
import com.robot.core.manager.MapManager;
import com.robot.core.manager.ModuleManager;
import com.robot.core.manager.StatManager;
import com.robot.core.net.SocketConnection;
import com.robot.core.npc.NpcDialogNew_1;
import com.robot.core.utils.CommonUI;
import flash.display.MovieClip;
import flash.events.MouseEvent;
import flash.geom.Point;

class RomanticTask1
{
    
   
   private var ui:MovieClip;
   
   private var curState:int;
   
   public function RomanticTask1(param1:MovieClip)
   {
      super();
      this.ui = param1;
      this.ui.addEventListener(MouseEvent.CLICK,this.onClick);
      this.updateState();
   }
   
   public function onNpcClick(param1:int) : void
   {
      var npcId:int = param1;
      switch(npcId)
      {
         case 0:
            new PlayTalksAction({
               "name":"talk1",
               "type":"talks",
               "value":[[2924,"菇菇发？菇菇发——","…"]]
            }).doAction().then(function():Promise
            {
               var defer:* = undefined;
               defer = new Deferred();
               NpcDialogNew_1.show(2924,["菇菇发不见了！要赶快找到她才行！"],["现在就去找！","再等等。"],[function():void
               {
                  defer.resolve(null);
               },function():void
               {
                  defer.reject(null);
               }]);
               return defer.promise;
            }).then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[3,1]);
            }).then(function():Promise
            {
               return new PlayTalksAction({
                  "name":"talk2",
                  "type":"talks",
                  "value":[[20,"那要怎么找她呢…","先想一想"],[2924,"嗯…先去问问周围精灵有没有见到菇菇发吧！","这就去问！"]]
               }).doAction();
            }).then(this.updateState);
            break;
         case 1:
            StatManager.sendStat2014("0817 浪漫游乐园","与素咔完成对话","2018运营活动");
            new PlayTalksAction({
               "name":"talk3",
               "type":"talks",
               "value":[[2931,"8月3号开始每日签到就可以获得精灵素咔哦！啊，客官要来一杯甜茶吗？","不用了谢谢，请问你有看到一只粉色的精灵吗？"],[2931,"粉色的精灵？我只知道素咔是粉色的哦！你们一定不是在找素咔吧！","当然不是啦！"],[2931,"哈哈哈，没有看到哦！那要不要买一支粉色的棉花糖啊？","不用啦，谢谢"]]
            }).doAction().then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[3,2]);
            }).then(this.updateState);
            break;
         case 2:
            StatManager.sendStat2014("0817 浪漫游乐园","与艾尔完成对话","2018运营活动");
            new PlayTalksAction({
               "name":"talk3",
               "type":"talks",
               "value":[[2569,"好开心，不知道会不会遇到我的偶像呢…","您好，请问你有看到一只粉色的精灵吗？"],[2569,"诶？粉色的精灵？","是的，她是我的好朋友。"],[2569,"你们走散了吗？她叫什么名字呀？","她叫菇菇发，难道您有看到吗？"],[2569,"嗯…我想想…","想想…"],[2569,"果然…","果然？"],[2569,"仔细想想，果然我没有见过诶。","……"],[2569,"你们再去问问吧，一定可以找到你的好朋友的，我也会帮你看看的。","好的，谢谢您了。"]]
            }).doAction().then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[3,3]);
            }).then(this.updateState);
            break;
         case 3:
            StatManager.sendStat2014("0817 浪漫游乐园","与淘灵灵完成对话","2018运营活动");
            new PlayTalksAction({
               "name":"talk4",
               "type":"talks",
               "value":[[2925,"淘淘乐，乐淘淘，淘灵灵超级开心！","您好，请问你有看到一只粉色的精灵吗？"],[2925,"精灵精灵？等等，你是要问淘灵灵问题吗？","是的，我和好朋友走散了，正在找她，请问您有看到吗？"]]
            }).doAction().then(function():Promise
            {
               var defer:* = undefined;
               defer = new Deferred();
               NpcDialogNew_1.show(2925,["嗯哼，随随便便就来问我问题，你也要先答出淘灵灵的问题才行！"],["答就答，谁怕谁！","再问问别人好了。"],[function():void
               {
                  defer.resolve(null);
               },function():void
               {
                  defer.reject(null);
               }]);
               return defer.promise;
            }).then(function():Promise
            {
               var defer:* = undefined;
               defer = new Deferred();
               NpcDialogNew_1.show(2925,["请听题：1和2谁最懒？"],["我猜是1","当然是2啦。"],[function():void
               {
                  NpcDialogNew_1.show(2925,["哇，答对了！好聪明呀！看来淘灵灵要回答你的问题了，淘灵灵没看到你说的精灵。"],["好吧，谢谢您。"],[function():void
                  {
                     defer.resolve(null);
                  }]);
               },function():void
               {
                  NpcDialogNew_1.show(2925,["哈哈哈，答错了！一不做二不休，最懒的当然是1啦！"],["啊？原来是这样…"],[function():void
                  {
                     NpcDialogNew_1.show(2925,["不过淘灵灵很开心，就回答你吧，我没有看到你说的精灵呢！"],["好吧，谢谢您。"],[function():void
                     {
                        defer.resolve(null);
                     }]);
                  }]);
               }]);
               return defer.promise;
            }).then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[3,4]);
            }).then(this.updateState);
            break;
         case 4:
            StatManager.sendStat2014("0817 浪漫游乐园","与杰米尼完成对话","2018运营活动");
            new PlayTalksAction({
               "name":"talk5",
               "type":"talks",
               "value":[[2926,"游乐园游乐园！我最爱的游乐园！","您好，请问你有看到一只粉色的精灵吗？"],[2926,"陌生精灵？听说不能随便和陌生精灵讲话。","额…请问你有看到…"],[2926,"不知道不知道我什么都不知道！","好吧，谢谢。"]]
            }).doAction().then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[3,5]);
            }).then(this.updateState);
            break;
         case 5:
            new PlayTalksAction({
               "name":"talk6",
               "type":"talks",
               "value":[[2927,"此山是我开,此树是我栽。要想过此路,就要对暗号！","呵呵呵….（好土的台词。）"],[2927,"说你呢！想要过去先要问我布布答不答应！","那个…我正在寻找我的好朋友，请问你有看到一只粉色的精灵吗？"]]
            }).doAction().then(function():Promise
            {
               var defer:* = undefined;
               defer = new Deferred();
               NpcDialogNew_1.show(2927,["少废话，布布才不会轻易回答你！来吧，对暗号，不然才不会让你过去！"],["好，那就和你对暗号！","不对，走开！"],[function():void
               {
                  defer.resolve(null);
               },function():void
               {
                  FightManager.tryFight(858,[0,0,0,0],function():void
                  {
                     MapManager.refMap(false,true);
                  });
               }]);
               return defer.promise;
            }).then(function():Promise
            {
               var defer:* = undefined;
               defer = new Deferred();
               NpcDialogNew_1.show(2927,["蚂蚱上豆架"],["借大架子吓人","见架子就爬"],[function():void
               {
                  defer.resolve(1);
               },function():void
               {
                  defer.resolve(0);
               }]);
               return defer.promise;
            }).then(function(param1:int):Promise
            {
               var defer:* = undefined;
               var i:int = param1;
               defer = new Deferred();
               NpcDialogNew_1.show(2927,["墙上茅草"],["长在墙上","随风两边倒"],[function():void
               {
                  defer.resolve(i);
               },function():void
               {
                  defer.resolve(i + 1);
               }]);
               return defer.promise;
            }).then(function(param1:int):Promise
            {
               var defer:* = undefined;
               var i:int = param1;
               defer = new Deferred();
               NpcDialogNew_1.show(2927,["脚踏西瓜皮"],["两脚生风","滑到哪里是哪里"],[function():void
               {
                  defer.resolve(i);
               },function():void
               {
                  defer.resolve(i + 1);
               }]);
               return defer.promise;
            }).then(function(param1:int):Promise
            {
               var defer:* = undefined;
               var i:int = param1;
               defer = new Deferred();
               NpcDialogNew_1.show(2927,["千里送鹅毛"],["礼轻人义重","送来有啥用"],[function():void
               {
                  defer.resolve(i + 1);
               },function():void
               {
                  defer.resolve(i);
               }]);
               return defer.promise;
            }).then(function(param1:int):Promise
            {
               var defer:* = undefined;
               var i:int = param1;
               defer = new Deferred();
               NpcDialogNew_1.show(2927,["茅坑里扔炸弹"],["激起民愤（粪）","味道酸爽"],[function():void
               {
                  defer.resolve(i + 1);
               },function():void
               {
                  defer.resolve(i);
               }]);
               return defer.promise;
            }).then(function(param1:int):Promise
            {
               var defer:* = undefined;
               var i:int = param1;
               defer = new Deferred();
               if(i >= 3)
               {
                  NpcDialogNew_1.show(2927,["哇，竟然能说对暗号，看来是自己人！那我就回答你的问题吧！"],["额…请问你有看到我的好朋友菇菇发吗？一只很可爱的粉色精灵。"],[function():void
                  {
                     NpcDialogNew_1.show(2927,["所有路过的精灵都要通过布布这一关，布布确定没有见过这样的精灵呢！"],["哎…好吧，谢谢。"],[function():void
                     {
                        defer.resolve(null);
                     }]);
                  }]);
               }
               else
               {
                  NpcDialogNew_1.show(2927,["哼！连暗号都答不出来，一看就不是自己人，布布拒绝回答你的问题！"],["我想想再回来和你对暗号！"],[function():void
                  {
                     defer.reject(null);
                  }]);
               }
               return defer.promise;
            }).then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[3,6]);
            }).then(this.updateState);
            break;
         case 6:
            StatManager.sendStat2014("0817 浪漫游乐园","与初夏完成对话","2018运营活动");
            new PlayTalksAction({
               "name":"talk7",
               "type":"talks",
               "value":[[2928,"哇~夏天果然要出来玩！小鸭子冲啊！","您好，请问你有看到一只粉色的精灵吗？"],[2928,"哇！你在和我说话吗？要和我一起玩吗？","那个…我和一位好朋友走散了，我正在寻找我的好朋友…"],[2928,"啊~酱紫啊~是怎样的精灵呢？","粉色的，圆滚滚的，超级可爱的精灵。"],[2928,"超级可爱？一定没有初夏可爱吧！","额…您有看到吗？"],[2928,"哈哈哈，没有诶。","好吧，谢谢。"]]
            }).doAction().then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[3,7]);
            }).then(this.updateState);
            break;
         case 7:
            StatManager.sendStat2014("0817 浪漫游乐园","与艾尔再次完成对话显示脚印","2018运营活动");
            new PlayTalksAction({
               "name":"talk8",
               "type":"talks",
               "value":[[2569,"水去日日流，花落日日少…","？"],[2569,"时间流过都会留下痕迹，更何况是精灵呢。","痕迹？"],[2569,"还没有找到的话，不如看看有没有精灵留下的脚印。","对啊，看看有没有脚印！"]]
            }).doAction().then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[3,8]);
            }).then(this.updateState);
            break;
         case 8:
            new PlayTalksAction({
               "name":"talk9",
               "type":"talks",
               "value":[[2924,"还没找到吗？再四处找找吧！","好的"]]
            }).doAction();
            break;
         case 9:
            new PlayTalksAction({
               "name":"talk2",
               "type":"talks",
               "value":[[20,"那要怎么找她呢…","先想一想"],[2924,"嗯…先去问问周围精灵有没有见到菇菇发吧！","这就去问！"]]
            }).doAction();
            break;
         case 10:
            new PlayTalksAction({
               "name":"talk8",
               "type":"talks",
               "value":[[2569,"水去日日流，花落日日少…","？"],[2569,"时间流过都会留下痕迹，更何况是精灵呢。","痕迹？"],[2569,"还没有找到的话，不如看看有没有精灵留下的脚印。","对啊，看看有没有脚印！"]]
            }).doAction();
      }
   }
   
   public function onClick(param1:MouseEvent) : void
   {
      var index:int = 0;
      var e:MouseEvent = param1;
      if(e.target.name == "close")
      {
         ToolBarController.panel.visible = true;
         MainManager.actorInfo.mapID = 11669;
         KTool.changeMapWithCallBack(1,function():void
         {
            ModuleManager.showAppModule("RomanticAmusementParkMainPanel");
         });
         return;
      }
      index = int(KTool.getIndex(e.target));
      MainManager.actorModel.moveAndAction(new Point(e.stageX,e.stageY),function():void
      {
         if(index == 1)
         {
            onNpcClick(curState == 0 ? 0 : (curState == 1 ? 9 : 8));
         }
         else if(index == 3)
         {
            onNpcClick(curState == 1 ? 2 : (curState == 2 ? 7 : 10));
         }
         else if(index >= 2 && index <= 7)
         {
            onNpcClick(index - 1);
         }
         else if(index == 8)
         {
            StatManager.sendStat2014("0817 浪漫游乐园","点击脚印","2018运营活动");
            destroy();
            MapManager.changeMap(11700);
         }
      });
   }
   
   public function updateState() : void
   {
      KTool.getMultiValue([14580,14579],function(param1:Array):void
      {
         if(KTool.getBit(param1[0],1) == 0)
         {
            curState = 0;
         }
         else if(param1[0] == 127)
         {
            curState = 2;
         }
         else if(param1[0] == 255)
         {
            curState = 3;
         }
         else
         {
            curState = 1;
         }
         ui["mc"].visible = curState == 3;
         ui["boss_8"].visible = curState == 3;
         var _loc2_:int = 1;
         while(_loc2_ <= 7)
         {
            if(curState == 0)
            {
               CommonUI.setEnabled(ui["boss_" + _loc2_],_loc2_ == 1,false);
            }
            else if(curState == 1)
            {
               CommonUI.setEnabled(ui["boss_" + _loc2_],_loc2_ == 1 || !KTool.getBit(param1[0],_loc2_),false);
            }
            else if(curState == 2)
            {
               CommonUI.setEnabled(ui["boss_" + _loc2_],_loc2_ == 1 || _loc2_ == 3,false);
            }
            else
            {
               CommonUI.setEnabled(ui["boss_" + _loc2_],_loc2_ == 1 || _loc2_ == 3,false);
            }
            _loc2_++;
         }
         _loc2_ = 1;
         while(_loc2_ <= 8)
         {
            if(curState == 0)
            {
               ui["arrow_" + _loc2_].visible = _loc2_ == 1;
            }
            else if(curState == 1)
            {
               ui["arrow_" + _loc2_].visible = _loc2_ >= 2 && _loc2_ <= 7 && !KTool.getBit(param1[0],_loc2_);
            }
            else if(curState == 2)
            {
               ui["arrow_" + _loc2_].visible = _loc2_ == 3;
            }
            else if(curState == 3)
            {
               ui["arrow_" + _loc2_].visible = _loc2_ == 8;
            }
            _loc2_++;
         }
         if(param1[1] >= 1)
         {
            MapManager.refMap(false,true);
         }
      });
   }
   
   public function destroy() : void
   {
      if(this.ui != null)
      {
         this.ui.removeEventListener(MouseEvent.CLICK,this.onClick);
      }
      this.ui = null;
   }
}

import com.codecatalyst.promise.Deferred;
import com.codecatalyst.promise.Promise;
import com.robot.app.task.petstory.util.KTool;
import com.robot.app.toolBar.ToolBarController;
import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
import com.robot.core.animate.AnimateManager;
import com.robot.core.manager.ItemManager;
import com.robot.core.manager.MainManager;
import com.robot.core.manager.MapManager;
import com.robot.core.manager.ModuleManager;
import com.robot.core.manager.StatManager;
import com.robot.core.net.SocketConnection;
import com.robot.core.npc.NpcDialogNew_1;
import com.robot.core.ui.alert.Alarm;
import flash.display.MovieClip;
import flash.events.MouseEvent;
import flash.geom.Point;

class RomanticTask2
{
    
   
   private var ui:MovieClip;
   
   private var curState:int;
   
   private var bollState:int;
   
   public function RomanticTask2(param1:MovieClip)
   {
      super();
      this.ui = param1;
      this.ui.addEventListener(MouseEvent.CLICK,this.onClick);
      this.updateState();
   }
   
   public function onNpcClick(param1:int) : void
   {
      var npcId:int = param1;
      switch(npcId)
      {
         case 1:
            new PlayTalksAction({
               "name":"talk10",
               "type":"talks",
               "value":[[2930,"啊~终于安全回来了呢~好开心呀~","哼！"],[2924,"开心？差点就被怀蛋抓走了，你还开心？！","…"],[2930,"哎呀…不是有蘑牙牙在吗，我知道你一定会来救我的~","…"],[2924,"我没跟你开玩笑！你知不知道你差一点就…你知道我有多担心吗？","…"],[2930,"蘑牙牙…我..","…"],[2924,"我什么我？就知道瞎跑，下次被抓了我才不会去救你！","…"],[2930,"蘑牙牙…你听我解释…","…"],[2924,"我不想听你解释！你知道自己犯了多大的错误吗？啊？","蘑牙牙…"],[2930,"我…我…被坏蛋抓走了，我也很害怕很难过啊…","…"],[2930,"好不容易回来了，你都不安慰我一下，那么凶，只顾着骂我…","…"],[2930,"蘑牙牙你太过分了！我不想理你了…（哭着跑开）","啊…菇菇发？"]]
            }).doAction().then(function():Promise
            {
               return AnimateManager.playMcAnimateWithPromis(ui["mc_1"],3,"mc");
            }).then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[4,0]);
            }).then(this.updateState);
            break;
         case 2:
            new PlayTalksAction({
               "name":"talk11",
               "type":"talks",
               "value":[[2924,"啊…菇菇发？","菇菇发怎么哭着跑开了？"],[2924,"是我说话太凶了吗？","好像是有一点…"],[2924,"我只是想让她知道错误，下次不要乱跑而已…~","如果好好和她说，她应该是可以听进去的。"],[2924,"可是现在怎么办呢？她哭得很伤心…","啊，有办法了！"],[2924,"买几根棉花糖给她，她会不会就开心了？","好主意！这就去买几根棉花糖吧！"]]
            }).doAction().then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[4,0]);
            }).then(this.updateState);
            break;
         case 3:
            new PlayTalksAction({
               "name":"talk12",
               "type":"talks",
               "value":[[2924,"菇菇发不开心了，要赶紧买几根棉花糖安慰她一下才行！","我这就去棉花糖机那里买！"]]
            }).doAction();
            break;
         case 4:
            new PlayTalksAction({
               "name":"talk13",
               "type":"talks",
               "value":[[2930,"蘑牙牙太过分了…呜呜呜…我不要理他了…","…"]]
            }).doAction();
            break;
         case 5:
            StatManager.sendStat2014("0817 浪漫游乐园","任务二点击素咔开始对话","2018运营活动");
            new PlayTalksAction({
               "name":"talk14",
               "type":"talks",
               "value":[[2931,"8月3号开始每日签到就可以获得精灵素咔哦！啊，客官，有什么可以帮助您的吗？","请问这里有棉花糖吗？"],[2931,"棉花糖吗？有的哦！","太好了，能给我两个棉花糖吗？"],[2931,"可以呦，不过你要拿一些东西和我换哦！","什么东西？"]]
            }).doAction().then(function():Promise
            {
               if(curState == 2)
               {
                  return SocketConnection.sendWithPromise(45743,[4,0]);
               }
               return Deferred.reject(null);
            }).then(function():void
            {
               onNpcClick(6);
            });
            break;
         case 6:
            NpcDialogNew_1.show(2931,["“圆圆的身体皮儿薄，有红有绿颜色好，栓在线上随风舞，撒手高飞天上飘。”你知道这是什么吗？"],["我知道了！","我再想想。"],[function():void
            {
               ModuleManager.showAppModule("RomanticAmusementParkSub1Panel");
            },function():void
            {
               updateState();
            }]);
            break;
         case 7:
            new PlayTalksAction({
               "name":"talk15",
               "type":"talks",
               "value":[[2931,"你猜对啦！是气球！那可以在周围收集五个气球拿给素咔吗？","好的，包在我身上！"]]
            }).doAction().then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[4,0]);
            }).then(this.updateState);
            break;
         case 8:
            new PlayTalksAction({
               "name":"talk18",
               "type":"talks",
               "value":[[2931,"哇！真的找到五个气球啦！谢谢你~","不用谢，现在可以给我几根棉花糖吗？"],[2931,"当然可以啦！吃了素咔的棉花糖，甜甜蜜蜜到永远~","谢谢您啦。"]]
            }).doAction().then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[4,0]);
            }).then(this.updateState);
            break;
         case 9:
            new PlayTalksAction({
               "name":"talk16",
               "type":"talks",
               "value":[[2924,"太好了，有了棉花糖，菇菇发应该会很快心！","这就去找菇菇发。"]]
            }).doAction().then(function():Promise
            {
               ui["arrow_1"].visible = false;
               return AnimateManager.playMcAnimateWithPromis(ui["mc_2"],3,"mc");
            }).then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[4,0]);
            }).then(this.updateState);
            break;
         case 10:
            new PlayTalksAction({
               "name":"talk17",
               "type":"talks",
               "value":[[2924,"菇菇发菇菇发！不要哭了，你看我给你拿了什么？","？"],[2930,"嗯？这是…棉花糖？","…"],[2924,"哈哈哈！是棉花糖，开心吗？","…"],[2930,"哇…开心…蘑牙牙…","…"],[2924,"好啦好啦，不哭啦~","…"],[2930,"蘑牙牙，对不起，我知道错了…","…"],[2924,"没事的，知道错了就好，以后不要一个人乱跑了，没有你我可怎么办啊。","蘑牙牙…"],[2930,"好啦~快吃棉花糖吧，乖乖的！","嗯！"]]
            }).doAction().then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[4,0]);
            }).then(this.updateState);
            break;
         case 11:
            new PlayTalksAction({
               "name":"talk19",
               "type":"talks",
               "value":[[2931,"要在周围收集五个气球给素咔，才可以获得棉花糖哦！","好的，包在我身上！"]]
            }).doAction();
      }
   }
   
   public function onClick(param1:MouseEvent) : void
   {
      var p:Point;
      var index:int = 0;
      var e:MouseEvent = param1;
      if(e.target.name == "close")
      {
         ToolBarController.panel.visible = true;
         MainManager.actorInfo.mapID = 11669;
         KTool.changeMapWithCallBack(1,function():void
         {
            ModuleManager.showAppModule("RomanticAmusementParkMainPanel");
         });
         return;
      }
      index = int(KTool.getIndex(e.target));
      p = new Point(e.stageX,e.stageY);
      if(index >= 4 && index <= 9)
      {
         p = new Point(e.target.x,e.target.y);
      }
      MainManager.actorModel.moveAndAction(p,function():void
      {
         if(index == 1)
         {
            onNpcClick(curState == 0 ? 1 : (curState == 1 ? 2 : (curState == 2 ? 3 : (curState == 7 ? 9 : (curState == 8 ? 10 : 0)))));
         }
         else if(index == 2)
         {
            onNpcClick(curState == 0 ? 1 : (curState == 1 ? 4 : (curState == 8 ? 10 : 0)));
         }
         else if(index == 3)
         {
            onNpcClick(curState == 2 ? 5 : (curState == 3 ? 6 : (curState == 4 ? 7 : (curState == 5 ? 11 : (curState == 6 ? 8 : 0)))));
         }
         else if(index >= 4 && index <= 9)
         {
            if(KTool.getBit(bollState,index - 3))
            {
               Alarm.show("这里已经没有多余的气球啦，去别的地方看看吧！");
            }
            else
            {
               SocketConnection.sendWithPromise(45743,[7,index - 3]).then(updateState);
            }
         }
      });
   }
   
   public function updateState() : void
   {
      KTool.getMultiValue([14581,14583,14579],function(param1:Array):void
      {
         var arr:Array = param1;
         ItemManager.updateAndGetItemsNum([1717782],function(param1:Array):void
         {
            if(arr[0] == 0)
            {
               ui["mc_1"].gotoAndStop(1);
            }
            else
            {
               ui["mc_1"].gotoAndStop(2);
            }
            curState = arr[0];
            if(curState >= 8)
            {
               ui["mc_2"].gotoAndStop(2);
            }
            else
            {
               ui["mc_2"].gotoAndStop(1);
            }
            bollState = arr[1];
            if(arr[2] >= 2)
            {
               MapManager.refMap(false,true);
            }
            ui["arrow_1"].visible = curState == 0 || curState == 1 || curState == 7;
            ui["arrow_2"].visible = false;
            ui["arrow_3"].visible = curState == 2 || curState == 3 || curState == 4 || curState == 6;
            ui["arrow_4"].visible = curState == 8;
            if(param1[0] >= 5 && curState == 5)
            {
               SocketConnection.sendWithPromise(45743,[4,0]).then(updateState);
               return;
            }
            if(curState == 4)
            {
               onNpcClick(7);
            }
         });
      });
   }
   
   public function destroy() : void
   {
      if(this.ui != null)
      {
         this.ui.removeEventListener(MouseEvent.CLICK,this.onClick);
      }
      this.ui = null;
   }
}

import com.codecatalyst.promise.Promise;
import com.robot.app.task.petstory.util.KTool;
import com.robot.app.toolBar.ToolBarController;
import com.robot.app2.control.activityHelper.actions.PlayTalksAction;
import com.robot.core.manager.MainManager;
import com.robot.core.manager.MapManager;
import com.robot.core.manager.ModuleManager;
import com.robot.core.net.SocketConnection;
import com.robot.core.npc.NpcDialogNew_1;
import flash.display.MovieClip;
import flash.events.MouseEvent;
import flash.geom.Point;

class RomanticTask3
{
    
   
   private var ui:MovieClip;
   
   private var curState:int;
   
   public function RomanticTask3(param1:MovieClip)
   {
      super();
      this.ui = param1;
      param1.addEventListener(MouseEvent.CLICK,this.onClick);
      this.updateState();
   }
   
   public function onNpcClick(param1:int) : void
   {
      var npcId:int = param1;
      switch(npcId)
      {
         case 1:
            new PlayTalksAction({
               "name":"talk17",
               "type":"talks",
               "value":[[2930,"蘑牙牙，你真好~","好啦~只要你答应我以后不乱跑，我会一直对你好的。"],[2924,"哈哈！不如我们去找淘灵灵玩小游戏吧，听说获胜了会有小奖励呢！","好啊，那就去找淘灵灵吧！"]]
            }).doAction().then(function():Promise
            {
               return SocketConnection.sendWithPromise(45743,[5,0]);
            }).then(this.updateState);
            break;
         case 2:
            NpcDialogNew_1.show(2925,["嗨~是要找淘灵灵玩小游戏吗？来吧，看看你的反应力够不够厉害！"],["这就开始游戏！","让我冷静一下。"],[function():void
            {
               ModuleManager.showAppModule("RomanticAmusementParkSub2Panel");
            },function():void
            {
            }]);
      }
   }
   
   public function onClick(param1:MouseEvent) : void
   {
      var index:int = 0;
      var e:MouseEvent = param1;
      if(e.target.name == "close")
      {
         ToolBarController.panel.visible = true;
         MainManager.actorInfo.mapID = 11669;
         KTool.changeMapWithCallBack(1,function():void
         {
            ModuleManager.showAppModule("RomanticAmusementParkMainPanel");
         });
         return;
      }
      index = int(KTool.getIndex(e.target));
      MainManager.actorModel.moveAndAction(new Point(e.stageX,e.stageY),function():void
      {
         if(index == 1)
         {
            onNpcClick(curState == 0 ? 1 : 0);
         }
         else if(index == 2)
         {
            onNpcClick(curState == 0 ? 1 : 0);
         }
         else if(index == 3)
         {
            onNpcClick(curState == 1 ? 2 : 0);
         }
      });
   }
   
   public function updateState() : void
   {
      KTool.getMultiValue([14582,14579],function(param1:Array):void
      {
         curState = param1[0];
         if(param1[1] >= 3)
         {
            MapManager.refMap(false,true);
         }
         ui["arrow_1"].visible = curState == 0;
         ui["arrow_2"].visible = curState == 0;
         ui["arrow_3"].visible = curState == 1;
      });
   }
   
   public function destroy() : void
   {
      if(this.ui != null)
      {
         this.ui.removeEventListener(MouseEvent.CLICK,this.onClick);
      }
      this.ui = null;
   }
}
