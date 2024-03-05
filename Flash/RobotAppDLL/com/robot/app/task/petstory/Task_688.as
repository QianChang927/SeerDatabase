package com.robot.app.task.petstory
{
   import com.robot.app.buyItem.ItemAction;
   import com.robot.app.control.LocalMsgController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.filters.GlowFilter;
   import flash.net.SharedObject;
   import flash.utils.Timer;
   import org.taomee.events.DynamicEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ToolTipManager;
   
   public class Task_688
   {
      
      private static var _instance:com.robot.app.task.petstory.Task_688;
      
      private static const TASKID:uint = 688;
      
      private static const TASKID_1:uint = 699;
       
      
      private var _map:BaseMapProcess;
      
      private var _npc:MovieClip;
      
      private var _sealBtn:MovieClip;
      
      private var _stoneMC:MovieClip;
      
      private var _stoneMC_1:MovieClip;
      
      private var _outMC:MovieClip;
      
      private var _outMC_1:MovieClip;
      
      private var _findMC:MovieClip;
      
      private var _flowerMC:MovieClip;
      
      private var _timer:Timer;
      
      private var _boxflg:uint = 0;
      
      private var _petReg:uint = 0;
      
      private var _boxMC:MovieClip;
      
      public function Task_688(param1:PrivateClass)
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.Task_688
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.Task_688(new PrivateClass());
         }
         return _instance;
      }
      
      public function init(param1:BaseMapProcess) : void
      {
         this._map = param1;
         this._npc = this._map.depthLevel["npcMC"];
         this._npc.buttonMode = true;
         this._sealBtn = this._map.conLevel["sealBtn"];
         this._sealBtn.buttonMode = true;
         this._stoneMC = this._map.conLevel["fireStoneMC"];
         this._stoneMC.buttonMode = true;
         this._stoneMC_1 = this._map.conLevel["waterStoneMC"];
         this._stoneMC_1.buttonMode = true;
         this._outMC = this._map.conLevel["outMC"];
         this._outMC.mouseEnabled = false;
         this._outMC.mouseChildren = false;
         this._outMC_1 = this._map.conLevel["outMC_1"];
         this._outMC_1.mouseEnabled = false;
         this._outMC_1.mouseChildren = false;
         this._findMC = this._map.conLevel["findMC"];
         this._findMC.buttonMode = true;
         this._flowerMC = this._map.conLevel["flowerMC"];
         this._flowerMC.buttonMode = true;
         this._boxMC = this._map.conLevel["boxMC"];
         this._boxMC.buttonMode = true;
         (this._map.conLevel["guideMC"] as MovieClip).visible = false;
         var _loc2_:uint = 0;
         while(_loc2_ < 5)
         {
            (this._map.conLevel["box_" + _loc2_] as MovieClip).visible = false;
            (this._map.conLevel["box_" + _loc2_] as MovieClip).buttonMode = true;
            (this._map.conLevel["box_" + _loc2_] as MovieClip).addEventListener(MouseEvent.CLICK,this.onMouseBox);
            _loc2_++;
         }
         this.addEvent();
         this.checkTask();
         this.hideMapPlayer();
         this.checkFindMC();
      }
      
      private function checkFindMC() : void
      {
         var _loc1_:Boolean = false;
         _loc1_ = Boolean(BufferRecordManager.getState(MainManager.actorInfo,178));
         if(_loc1_ == false)
         {
            this._findMC.filters = [new GlowFilter(16776960,1,10,10)];
         }
         _loc1_ = Boolean(BufferRecordManager.getState(MainManager.actorInfo,193));
         if(_loc1_ == false)
         {
            this._flowerMC.filters = [new GlowFilter(16776960,1,10,10)];
         }
      }
      
      private function checkTask() : void
      {
         var status:uint = uint(TasksManager.getTaskStatus(TASKID));
         if(status == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(TASKID,function(param1:Boolean):void
            {
               if(param1)
               {
                  initProcess_1();
               }
            });
         }
         else if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASKID,this.getTaskStates);
         }
         else if(status == TasksManager.COMPLETE)
         {
            this.checkWaterTaskState();
         }
      }
      
      private function checkWaterTaskState() : void
      {
         var status:uint = uint(TasksManager.getTaskStatus(TASKID_1));
         if(status == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(TASKID_1,function(param1:Boolean):void
            {
               if(param1)
               {
                  dialogSwitch(4);
               }
            });
         }
         else if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TASKID_1,this.getWaterTaskStates);
         }
         else if(status == TasksManager.COMPLETE)
         {
         }
      }
      
      private function buyItemFromTask(param1:uint, param2:Function) : void
      {
         var taskId:uint = param1;
         var fun:Function = param2;
         var status:uint = uint(TasksManager.getTaskStatus(taskId));
         if(status == TasksManager.UN_ACCEPT)
         {
            TasksManager.accept(taskId,function(param1:Boolean):void
            {
               var b:Boolean = param1;
               if(b)
               {
                  TasksManager.complete(taskId,0,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        if(fun != null)
                        {
                           fun();
                        }
                     }
                  });
               }
            });
         }
      }
      
      public function dialogSwitch(param1:uint) : void
      {
         var id:uint = param1;
         switch(id)
         {
            case 1:
               NpcDialog.show(NPC.XIANJING_ZHANGLAO,["终于等到有缘人了！" + MainManager.actorInfo.formatNick + "，你愿意帮帮我吗？"],["这是哪，发生什么事了？"],[function():void
               {
                  NpcDialog.show(NPC.XIANJING_ZHANGLAO,["这里是五行仙境，欢迎你！你肯抽空听我这老头子啰嗦，我真高兴！请求你，救救仙境里的精灵吧！"],["五行仙境？是什么？我不明白"],[function():void
                  {
                     NpcDialog.show(NPC.XIANJING_ZHANGLAO,["仙境是五行精灵成长的地方，这一共有5只精灵，其中2只原来就在这，另外3只长期生活在神殿内。哎，这一切真是说来话长！"],["继续说，我越来越有兴趣知道！"],[function():void
                     {
                        KTool.playFullMovie(20,function():void
                        {
                           TasksManager.complete(TASKID,0,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 initProcess_2();
                              }
                           });
                        });
                     }]);
                  }]);
               }]);
               break;
            case 2:
               NpcDialog.show(NPC.XIANJING_ZHANGLAO,["这两个小鬼用身躯保卫了星球，如今却无法自我解封！同时由于它们离开了自己的修炼石，我无法打开神殿之门，神殿里的那三个家伙的安危，我也不得而知！"],["那该怎么办呢？"],[function():void
               {
                  NpcDialog.show(NPC.XIANJING_ZHANGLAO,["只要解除火系和水系封印，精灵就能回到修炼石中，到时神殿之门就能打开了！" + MainManager.actorInfo.formatNick + "，你愿意出一份力吗？"],["当然，我愿意！"],[function():void
                  {
                     NpcDialog.show(NPC.XIANJING_ZHANGLAO,["看到神殿上方那个巨大的轮盘吗?精灵就被封印在那里!它们的属性特点不同，所以无法一次将他们全部救出来。"],["哦？"],[function():void
                     {
                        NpcDialog.show(NPC.XIANJING_ZHANGLAO,["据我的观察，呵呵，目前的气候情况，能先救那个火属性的家伙！记住，一旦封印解除，精灵会回到修炼石里。点击火系修炼石，击败它，就能获得精元哦！"],["事不宜迟，我该怎么做？"],[function():void
                        {
                           NpcDialog.show(NPC.XIANJING_ZHANGLAO,["这小鬼掌控着星球的火系元素！赶快点击神殿上方的星系元素阵，封印的秘密就在那里！这把五行之匙你拿着，或许能帮上你的忙！"],["收到！"],[function():void
                           {
                              EventManager.addEventListener(ItemAction.BUY_ONE,onZeroBuyItem);
                              ItemAction.buyItem(400843,false,1);
                              (_map.conLevel["guideMC"] as MovieClip).visible = true;
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
               break;
            case 3:
               NpcDialog.show(NPC.XIANJING_ZHANGLAO,["我是这片仙境的长老，找我有什么事？"],["如何拯救被困的精灵","修炼石的作用和仙境的故事","天机之种","没什么事"],[function():void
               {
                  NpcDialog.show(NPC.XIANJING_ZHANGLAO,["点击神殿上方的轮盘，封印的秘密就在那里!"],["知道了"]);
               },function():void
               {
                  NpcDialog.show(NPC.XIANJING_ZHANGLAO,["想知道什么？"],["修炼石的作用","仙境的故事","知道了"],[function():void
                  {
                     NpcDialog.show(NPC.XIANJING_ZHANGLAO,["修炼石是五行精灵自我修行的领域，据说能爆发出很强的能量！只要你击败守护精灵，就能控制修炼石了哦！不过首先，你得先解除封印，救出精灵！"],["知道了"]);
                  },function():void
                  {
                     NpcDialog.show(NPC.XIANJING_ZHANGLAO,["这里生活着5个精灵。海盗来袭之际，为了仙境的安全，神殿外的火系和水系精灵最终将身体封印在星系元素阵中。星球安全了，可它们永远无法离开阵法的禁锢！"],["知道了"]);
                  }]);
               },function():void
               {
                  var status:* = TasksManager.getTaskStatus(TASKID);
                  if(status == TasksManager.COMPLETE)
                  {
                     if(BufferRecordManager.getState(MainManager.actorInfo,187) == false)
                     {
                        NpcDialog.show(NPC.XIANJING_ZHANGLAO,[MainManager.actorInfo.formatNick + "，请答应我，无论将来遇到什么艰险，都不能把仙境的位置告诉赛尔的敌人，天机不可泄露！你能做到吗？"],["绝对没问题！","我要考虑下！"],[function():void
                        {
                           NpcDialog.show(NPC.XIANJING_ZHANGLAO,["这是天机之种，拿着！和两个小家伙的安危相比，仙境和星球的安全更加重要！经过刚才的考验，我艰辛你是一个善良、勇敢、能守秘密的小赛尔！"],["恩！"],[function():void
                           {
                              buyItemFromTask(712,function():void
                              {
                                 BufferRecordManager.setState(MainManager.actorInfo,187,true,function():void
                                 {
                                 });
                              });
                           }]);
                        }]);
                     }
                     else
                     {
                        NpcDialog.show(NPC.XIANJING_ZHANGLAO,["你已经拿过天机之种了！"],["知道了"]);
                     }
                  }
                  else
                  {
                     NpcDialog.show(NPC.XIANJING_ZHANGLAO,["先去解开火系封印，然后再来找我吧！"],["知道了"]);
                  }
               }]);
               break;
            case 4:
               NpcDialog.show(NPC.XIANJING_ZHANGLAO,["感谢你救了小火雀！你真是个善良的小赛尔！"],["谢谢夸奖！水系封印能解除吗？"],[function():void
               {
                  NpcDialog.show(NPC.XIANJING_ZHANGLAO,["你需要先收集10个水之精华，才能开启解封仪式哦！0xff0000如果有超NO跟随，就能直接开启了！0xffffff"],["好，我明白了！","开通超能NONO"],[function():void
                  {
                     NpcDialog.show(NPC.XIANJING_ZHANGLAO,["希望你能帮我完成心愿！我期待这2个小家伙重聚的一天！"],["放心，我会救出它的！"],[function():void
                     {
                        TasksManager.complete(TASKID_1,0,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                           }
                        });
                     }]);
                  },function():void
                  {
                     LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4);
                  }]);
               }]);
         }
      }
      
      private function getTaskStates(param1:Array) : void
      {
         if(!param1[0])
         {
            this.initProcess_1();
         }
         else if(Boolean(param1[0]) && !param1[1])
         {
            this.initProcess_2();
         }
      }
      
      private function getWaterTaskStates(param1:Array) : void
      {
         if(!param1[0])
         {
            this.dialogSwitch(4);
         }
         else if(Boolean(param1[0]) && !param1[1])
         {
         }
      }
      
      private function initProcess_1() : void
      {
         KTool.playFullMovie(19,function():void
         {
            dialogSwitch(1);
         });
      }
      
      private function initProcess_2() : void
      {
         this.dialogSwitch(2);
      }
      
      private function hideMapPlayer() : void
      {
         ToolBarController.showOrHideAllUser(false);
      }
      
      private function onZeroBuyItem(param1:DynamicEvent) : void
      {
         var e:DynamicEvent = param1;
         EventManager.removeEventListener(ItemAction.BUY_ONE,this.onZeroBuyItem);
         if(uint(e.paramObject) == 400843)
         {
            TasksManager.complete(TASKID,1,function(param1:Boolean):void
            {
               if(param1)
               {
               }
            });
         }
      }
      
      private function addEvent() : void
      {
         this._npc.addEventListener(MouseEvent.CLICK,this.onMouseNpc);
         this._sealBtn.addEventListener(MouseEvent.CLICK,this.onMosueStar);
         this._stoneMC.addEventListener(MouseEvent.CLICK,this.onMouseStone);
         this._stoneMC_1.addEventListener(MouseEvent.CLICK,this.onMouseStone_1);
         this._findMC.addEventListener(MouseEvent.CLICK,this.onMosueFindMC);
         this._flowerMC.addEventListener(MouseEvent.CLICK,this.onMouseFlower);
         this._boxMC.addEventListener(MouseEvent.CLICK,this.onMouseExBox);
         ToolTipManager.add(this._stoneMC,"火系修炼石");
         ToolTipManager.add(this._stoneMC_1,"水系修炼石");
         var _loc1_:uint = 0;
         while(_loc1_ < 5)
         {
            ToolTipManager.add(this._map.conLevel["box_" + _loc1_] as MovieClip,"宝箱");
            (this._map.conLevel["box_" + _loc1_] as MovieClip).addEventListener(MouseEvent.CLICK,this.onMouseBox);
            _loc1_++;
         }
      }
      
      private function removeEvent() : void
      {
         this._npc.removeEventListener(MouseEvent.CLICK,this.onMouseNpc);
         this._sealBtn.removeEventListener(MouseEvent.CLICK,this.onMosueStar);
         this._stoneMC.removeEventListener(MouseEvent.CLICK,this.onMouseStone);
         this._stoneMC_1.removeEventListener(MouseEvent.CLICK,this.onMouseStone_1);
         this._findMC.removeEventListener(MouseEvent.CLICK,this.onMosueFindMC);
         this._flowerMC.removeEventListener(MouseEvent.CLICK,this.onMouseFlower);
         this._boxMC.removeEventListener(MouseEvent.CLICK,this.onMouseExBox);
         ToolTipManager.remove(this._stoneMC);
         var _loc1_:uint = 0;
         while(_loc1_ < 5)
         {
            ToolTipManager.remove(this._map.conLevel["box_" + _loc1_] as MovieClip);
            (this._map.conLevel["box_" + _loc1_] as MovieClip).removeEventListener(MouseEvent.CLICK,this.onMouseBox);
            _loc1_++;
         }
      }
      
      private function onMouseExBox(param1:MouseEvent) : void
      {
         if(TasksManager.getTaskStatus(TASKID_1) != TasksManager.COMPLETE)
         {
            Alarm.show("需要先水系封印才能开启皮箱！");
            return;
         }
         ModuleManager.showModule(ClientConfig.getAppModule("SuperNoExchangeBoxPanel"),"正在打开兑换面板");
      }
      
      private function onMouseFlower(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var state:Boolean = Boolean(BufferRecordManager.getState(MainManager.actorInfo,193));
         if(state == false)
         {
            this._flowerMC.filters = [];
            this.buyItemFromTask(713,function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,193,true,function():void
               {
               });
            });
         }
         else
         {
            Alarm.show("已经拾取过该物品咯！");
         }
      }
      
      private function onMouseNpc(param1:MouseEvent) : void
      {
         this.dialogSwitch(3);
      }
      
      private function onMosueStar(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SuperNoStarInfoPanel"),"正在打开星系元素阵介绍面板");
      }
      
      private function onMouseStone(param1:MouseEvent) : void
      {
         if(TasksManager.getTaskStatus(TASKID) != TasksManager.COMPLETE)
         {
            Alarm.show("守护精灵不在，修炼石还未激活，快去解救火系精灵吧!");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SuperNoProTrainStonePanel"),"正在打开属性修炼面板");
         }
      }
      
      private function onMouseStone_1(param1:MouseEvent) : void
      {
         if(TasksManager.getTaskStatus(TASKID_1) != TasksManager.COMPLETE)
         {
            Alarm.show("守护精灵不在，修炼石还未激活，快去解救水系精灵吧!");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SuperNoProTrainWaterStonePanel"),"正在打开属性修炼面板");
         }
      }
      
      private function onMosueFindMC(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var state:Boolean = Boolean(BufferRecordManager.getState(MainManager.actorInfo,178));
         if(state == false)
         {
            this._findMC.filters = [];
            KTool.getFrameMc(this._findMC,2,"",function(param1:DisplayObject):void
            {
               var o:DisplayObject = param1;
               var mc:MovieClip = o as MovieClip;
               AnimateManager.playMcAnimate(mc,1,"",function():void
               {
                  buyItemFromTask(710,function():void
                  {
                     BufferRecordManager.setState(MainManager.actorInfo,178,true,function():void
                     {
                        _findMC.gotoAndStop(1);
                     });
                  });
               });
            });
         }
         else
         {
            Alarm.show("已经拾取过该物品咯！");
         }
      }
      
      private function onMouseBox(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(this._boxflg == 1)
         {
            SocketConnection.send(CommandID.GAIN_FIVE_GODPLACE_BOX);
         }
         else if(this._boxflg == 2)
         {
            SocketConnection.send(CommandID.GAIN_FIVE_GODPLACE_BOX_TWO);
         }
         _loc2_.visible = false;
      }
      
      public function destory() : void
      {
         this.removeEvent();
         ToolBarController.showOrHideAllUser(true);
      }
      
      public function createBox2Map() : void
      {
         var mc:MovieClip;
         this._boxflg = 1;
         mc = this._map.conLevel["startMC"];
         AnimateManager.playMcAnimate(mc,1,"",function():void
         {
            var _loc1_:uint = 0;
            while(_loc1_ < 5)
            {
               (_map.conLevel["box_" + _loc1_] as MovieClip).visible = true;
               _loc1_++;
            }
            NpcDialog.show(NPC.XIANJING_ZHANGLAO,["好强大的能量！快看，场景出现了好多宝箱，赶快去拾取吧！切记，这股能量只能维持10分钟，时间一到，宝箱就会消失哦！"],["我知道了"]);
         });
      }
      
      public function createBox2Map_2() : void
      {
         var mc:MovieClip;
         this._boxflg = 2;
         mc = this._map.conLevel["startMC_1"];
         AnimateManager.playMcAnimate(mc,1,"",function():void
         {
            var _loc1_:uint = 0;
            while(_loc1_ < 5)
            {
               (_map.conLevel["box_" + _loc1_] as MovieClip).visible = true;
               _loc1_++;
            }
            NpcDialog.show(NPC.XIANJING_ZHANGLAO,["好强大的能量！快看，场景出现了好多宝箱，赶快去拾取吧！切记，这股能量只能维持10分钟，时间一到，宝箱就会消失哦！"],["我知道了"]);
         });
      }
      
      public function specialEvent() : void
      {
         if(MainManager.actorInfo.isBeaten == 1 || MainManager.actorInfo.isBeaten_1 == 1)
         {
            this._timer = new Timer(1000 * 60 * 20);
            this._timer.addEventListener(TimerEvent.TIMER,this.onTimer);
            this._timer.start();
         }
      }
      
      private function onTimer(param1:TimerEvent) : void
      {
         var _loc3_:String = null;
         var _loc4_:String = null;
         var _loc5_:SharedObject = null;
         var _loc2_:Date = SystemTimerManager.sysDate;
         _loc3_ = "superNoFireSeal";
         _loc4_ = "fireElment_" + _loc2_.getFullYear() + "_" + _loc2_.getMonth() + "_" + _loc2_.getDate();
         _loc5_ = SOManager.getUserSO(_loc3_);
         if(Math.random() > 0.5 && _loc5_.data[_loc4_] == undefined && MainManager.actorInfo.isBeaten == 1)
         {
            this._timer.stop();
            SocketConnection.addCmdListener(CommandID.ACTIVE_FIVE_GODPLACE_SPECIAL_EVENT,this.onActiveEvent);
            SocketConnection.send(CommandID.ACTIVE_FIVE_GODPLACE_SPECIAL_EVENT);
            return;
         }
         _loc3_ = "superNoWaterSeal";
         _loc4_ = "waterElment_" + _loc2_.getFullYear() + "_" + _loc2_.getMonth() + "_" + _loc2_.getDate();
         _loc5_ = SOManager.getUserSO(_loc3_);
         if(Math.random() > 0.5 && _loc5_.data[_loc4_] == undefined && MainManager.actorInfo.isBeaten_1 == 1)
         {
            this._timer.stop();
            SocketConnection.addCmdListener(CommandID.ACTIVE_FIVE_GODPLACE_SPECIAL_EVENT_TWO,this.onActiveEventTwo);
            SocketConnection.send(CommandID.ACTIVE_FIVE_GODPLACE_SPECIAL_EVENT_TWO);
         }
      }
      
      private function onActiveEvent(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ACTIVE_FIVE_GODPLACE_SPECIAL_EVENT,this.onActiveEvent);
         var _loc2_:Date = SystemTimerManager.sysDate;
         var _loc3_:String = "superNoFireSeal";
         var _loc4_:String = "fireElment_" + _loc2_.getFullYear() + "_" + _loc2_.getMonth() + "_" + _loc2_.getDate();
         var _loc5_:SharedObject;
         (_loc5_ = SOManager.getUserSO(_loc3_)).data[_loc4_] = "true";
         SOManager.flush(_loc5_);
         LocalMsgController.addLocalMsg("SuperNoTrainMsgPanel",0,false);
      }
      
      private function onActiveEventTwo(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.ACTIVE_FIVE_GODPLACE_SPECIAL_EVENT_TWO,this.onActiveEventTwo);
         var _loc2_:Date = SystemTimerManager.sysDate;
         var _loc3_:String = "superNoWaterSeal";
         var _loc4_:String = "waterElment_" + _loc2_.getFullYear() + "_" + _loc2_.getMonth() + "_" + _loc2_.getDate();
         var _loc5_:SharedObject;
         (_loc5_ = SOManager.getUserSO(_loc3_)).data[_loc4_] = "true";
         SOManager.flush(_loc5_);
         LocalMsgController.addLocalMsg("SuperNoWaterTrainMsgPanel",0,false);
      }
      
      public function fightWithBoss() : void
      {
         this._petReg = 0;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         FightManager.fightWithBoss("火系精灵",this._petReg);
      }
      
      public function fightWithBoss_2() : void
      {
         this._petReg = 1;
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         FightManager.fightWithBoss("水系精灵",this._petReg);
      }
      
      private function onAlarmClickHandler(param1:PetFightEvent) : void
      {
         FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,this.onAlarmClickHandler);
         if((param1.dataObj as FightOverInfo).winnerID == MainManager.actorID)
         {
            if(this._petReg == 0)
            {
               MainManager.actorInfo.isBeaten = 1;
            }
            else if(this._petReg == 1)
            {
               MainManager.actorInfo.isBeaten_1 = 1;
            }
         }
      }
   }
}

class PrivateClass
{
    
   
   public function PrivateClass()
   {
      super();
   }
}
