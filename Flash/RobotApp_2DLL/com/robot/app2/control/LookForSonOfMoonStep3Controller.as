package com.robot.app2.control
{
   import com.robot.app.control.BonusController;
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcController;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class LookForSonOfMoonStep3Controller
   {
      
      private static var _start:int;
      
      private static const CMD_ID:int = 47253;
      
      private static const CD:int = 20;
      
      private static const BOSS_ID:int = 5652;
      
      private static const FOREVER_PROGRESS:int = 2638;
      
      private static const FOREVER_STATE:int = 2639;
       
      
      public function LookForSonOfMoonStep3Controller()
      {
         super();
      }
      
      public static function openMsgPanel() : void
      {
         KTool.getMultiValue([FOREVER_PROGRESS],function(param1:Array):void
         {
            var arr:Array = param1;
            if(arr[0] < 2)
            {
               if(arr[0] == 1 && !BitBuffSetClass.getState(22970) && MapManager.currentMap.id != 11004)
               {
                  ModuleManager.showAppModule("LookForSonOfMoonStep3MsgPanel",{"frame":1});
               }
               else
               {
                  LookForSonOfMoonStep3Controller["task" + (arr[0] + 1)](function():void
                  {
                     ModuleManager.showAppModule("LookForSonOfMoonStep3MsgPanel",{"frame":arr[0] + 1});
                  });
               }
            }
            else
            {
               ModuleManager.showAppModule("LookForSonOfMoonStep3MsgPanel",{"frame":arr[0] + 1});
            }
         });
      }
      
      public static function sendCmd(param1:int, param2:int, param3:Function = null) : void
      {
         var para1:int = param1;
         var para2:int = param2;
         var fun:Function = param3;
         SocketConnection.sendByQueue(CMD_ID,[para1,para2],function(param1:SocketEvent):void
         {
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      public static function doTask1() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            MapManager.currentMap.controlLevel["mcGame"].visible = false;
            MapManager.currentMap.controlLevel["mcMovie"].gotoAndStop(1);
            LookForSonOfMoonStep3Controller.openMsgPanel();
         });
         MapManager.changeMap(11004);
      }
      
      public static function doTask2() : void
      {
         var onGame:Function = null;
         var onClickTask2:Function = null;
         onGame = function():void
         {
            var mod1:TaskMod = null;
            var mod2:TaskMod = null;
            var mod3:TaskMod = null;
            var mod4:TaskMod = null;
            var mod5:TaskMod = null;
            var mod6:TaskMod = null;
            var mod7:TaskMod = null;
            var mod8:TaskMod = null;
            var mod9:TaskMod = null;
            var mod10:TaskMod = null;
            var mod11:TaskMod = null;
            var mod12:TaskMod = null;
            var mod13:TaskMod = null;
            var inner:int = CD - (SystemTimerManager.time - _start);
            KTool.showScore(MapManager.currentMap.controlLevel["mcGame"]["mcTime"],inner,0,true);
            if(inner <= 0)
            {
               SystemTimerManager.removeTickFun(onGame);
               MapManager.currentMap.controlLevel["mcGame"].visible = false;
               MapManager.currentMap.controlLevel["mcMovie"].gotoAndStop(1);
               MapManager.currentMap.controlLevel["mcMovie"]["pet"].removeEventListener(MouseEvent.CLICK,onClickTask2);
               mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["不行啊，它太快了，我们根本碰不到它的边。"]);
               mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["我们得另想主意才行。阿铁打你尽出馊主意。"]);
               mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["哼，好好好，我不说话了行吧，看看你们能想出什么主意来！"]);
               mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["我觉得吧，既然我们主动出击不行，那不如“守株待兔”！"]);
               mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["“守株待兔”？怎么个“守株待兔”法？"]);
               mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["嘿嘿，当然是用陷阱啦！我们先做好一个陷阱，然后等着它自投罗网就行啦！"]);
               mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["陷阱？不行不行，那会伤着它的！"]);
               mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["哎呀，我们不是做那种会伤人的陷阱，是做那种会困住精灵的陷阱。只要把它困住，我们不就可以跟它交流了吗？"]);
               mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["唔……目前来看，这是唯一的办法了。"]);
               mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["看吧，阿铁打？我们一起去做陷阱啊。"]);
               mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KILLUA,["奇牙！"]);
               mod12 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["你说的倒是好听，我们上哪儿去弄做陷阱的材料啊？"]);
               mod13 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["我们去弄点树枝和藤条就好啦！树枝风语之森里肯定有，藤条可以去痛苦沼泽弄一些。我们赶紧上路吧！"],["我们走！"]);
               TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13],function():void
               {
                  sendCmd(3,2,openMsgPanel);
               });
            }
         };
         onClickTask2 = function(param1:MouseEvent):void
         {
            NpcDialog.show(NPC.SHI_TA_KE,["嗷呜"]);
         };
         MapManager.currentMap.controlLevel["mcGame"].visible = true;
         MapManager.currentMap.controlLevel["mcMovie"]["pet"].addEventListener(MouseEvent.CLICK,onClickTask2);
         MapManager.currentMap.controlLevel["mcMovie"].play();
         _start = SystemTimerManager.time;
         SystemTimerManager.addTickFun(onGame);
      }
      
      public static function doTask3() : void
      {
         var count:int = 0;
         var onClickTask3:Function = null;
         onClickTask3 = function(param1:MouseEvent):void
         {
            var index:int = 0;
            var e:MouseEvent = param1;
            var name:String = String(e.target.name);
            if(name.substr(0,5) == "bough")
            {
               index = int(name.replace("bough",""));
               sendCmd(1,index + 1,function():void
               {
                  MapManager.currentMap.controlLevel["bough" + index].visible = false;
                  Alarm.show("你获得了一小捆树枝。");
                  count |= 1 << index;
                  if(count == 15)
                  {
                     finishTask3();
                     MapManager.currentMap.controlLevel.removeEventListener(MouseEvent.CLICK,onClickTask3);
                  }
               });
            }
         };
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var hasClick:Boolean = false;
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            MapManager.currentMap.controlLevel.addEventListener(MouseEvent.CLICK,onClickTask3);
            getState(0,function(param1:int):void
            {
               count = param1;
               var _loc2_:int = 0;
               while(_loc2_ < 4)
               {
                  hasClick = KTool.getBit(param1,_loc2_ + 1) > 0;
                  MapManager.currentMap.controlLevel["bough" + _loc2_].visible = !hasClick;
                  _loc2_++;
               }
            });
         });
         MapManager.changeMap(11005);
      }
      
      public static function finishTask3() : void
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["呼……这些树枝应该够了吧？我可是一刻没停地在找啊！"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["够啦够啦！阿铁打你最能干了！我们还需要一些藤条，我们赶快去痛苦沼泽吧！"],["我们走！"]);
         TaskDiaLogManager.single.playStory([_loc1_,_loc2_],openMsgPanel);
      }
      
      public static function doTask4() : void
      {
         var count:int = 0;
         var onClickTask4:Function = null;
         onClickTask4 = function(param1:MouseEvent):void
         {
            var index:int = 0;
            var e:MouseEvent = param1;
            var name:String = String(e.target.name);
            if(name.substr(0,6) == "rattan")
            {
               index = int(name.replace("rattan",""));
               sendCmd(2,index + 1,function():void
               {
                  MapManager.currentMap.controlLevel["rattan" + index].visible = false;
                  Alarm.show("你获得了一小根藤条。");
                  count |= 1 << index;
                  if(count == 15)
                  {
                     finishTask4();
                     MapManager.currentMap.controlLevel.removeEventListener(MouseEvent.CLICK,onClickTask4);
                  }
               });
            }
         };
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var hasClick:Boolean = false;
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            MapManager.currentMap.controlLevel.addEventListener(MouseEvent.CLICK,onClickTask4);
            getState(1,function(param1:int):void
            {
               count = param1;
               var _loc2_:int = 0;
               while(_loc2_ < 4)
               {
                  hasClick = KTool.getBit(param1,_loc2_ + 1) > 0;
                  MapManager.currentMap.controlLevel["rattan" + _loc2_].visible = !hasClick;
                  _loc2_++;
               }
            });
         });
         MapManager.changeMap(11006);
      }
      
      public static function finishTask4() : void
      {
         var _loc1_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["好了，藤条也差不多了，这些材料够我们做好几个陷阱啦。我们快回去吧！"]);
         var _loc2_:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["走！是时候揭开这个“会飞的白球”的庐山真面目了！"],["我们走！"]);
         TaskDiaLogManager.single.playStory([_loc1_,_loc2_],openMsgPanel);
      }
      
      public static function doTask5() : void
      {
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            MapManager.currentMap.controlLevel["mcBoss"].visible = false;
            KTool.hideMapAllPlayerAndMonster();
            NpcController.npcVisible = false;
            LevelManager.iconLevel.visible = false;
            MapObjectControl.hideOrShowAllObjects(false);
            ResourceManager.getResource(ClientConfig.getActiveUrl("look_for_son_of_moon_step3_5"),function(param1:MovieClip):void
            {
               var mod1:TaskMod;
               var mod2:TaskMod;
               var mod3:TaskMod;
               var mod4:TaskMod;
               var mod5:TaskMod;
               var mod6:TaskMod;
               var mod7:TaskMod;
               var mod8:TaskMod;
               var mod9:TaskMod;
               var mod10:TaskMod;
               var mod11:TaskMod;
               var mod12:TaskMod;
               var mod13:TaskMod;
               var mod14:TaskMod;
               var mod15:TaskMod;
               var mod16:TaskMod;
               var mod17:TaskMod;
               var mc:MovieClip = param1;
               MapManager.currentMap.controlLevel.addChild(mc);
               mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
               mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["……"]);
               mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["…………"]);
               mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["………………………………"]);
               mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["它怎么还不来啊，我都快睡着了。"]);
               mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["嘘，别出声，把它吓跑了，我们可就前功尽弃了！"]);
               mod7 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,2,"mc2"]);
               mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["咦，好像是只狼？"]);
               mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["原来如此，它不是什么“会飞的白球”，而是一只冰原狼。虽然这里是高山之上，但是冰天雪地，土地开阔，也很适合冰原狼一族居住。"]);
               mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["寒冷的天气对冰原狼来说完全不是问题。它们的体表有着厚厚的一层白毛，可以抵御严寒；它们有力的四肢让它们在雪地中快速移动，就像飞一般。"]);
               mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["我们快问问它，有没有见过一块项链碎片吧！"]);
               mod12 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["你好，请问……"]);
               mod13 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["你们这些该死的家伙，为什么要困住我！"]);
               mod14 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["呃，我们不是故意的，我们只是……"]);
               mod15 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["哼，你们以为这样就能抓住我吗？你们太天真了！"]);
               mod16 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["别生气啊，我们……"]);
               mod17 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,3,"mc3"]);
               TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13,mod14,mod15,mod16,mod17],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
                  NpcController.npcVisible = true;
                  LevelManager.iconLevel.visible = true;
                  MapObjectControl.hideOrShowAllObjects(true);
                  MapManager.currentMap.controlLevel.removeChild(mc);
                  sendCmd(3,3,openMsgPanel);
               });
            });
         });
         MapManager.changeMap(11007);
      }
      
      public static function doTask6() : void
      {
         refresh1107(function():void
         {
            MapManager.currentMap.controlLevel["mcBoss"].visible = true;
         });
      }
      
      public static function finishTask6() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         LevelManager.iconLevel.visible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         ResourceManager.getResource(ClientConfig.getActiveUrl("look_for_son_of_moon_step3_6"),function(param1:MovieClip):void
         {
            var arr:Array;
            var mc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(mc);
            arr = [new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["各位非常抱歉，我们实在无奈才出此下策。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["各位请听我一言。我身边这只小精灵是月之子奇牙。在一次战斗中，一条对它来说至关重要的项链碎成了几块，碎片散落在各处。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["它虽为月之子，但却还未真正成长起来。没有了那条项链，它就无法感受到月亮的恩赐之力，实力就会大打折扣。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.KILLUA,["奇牙！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["我们通过占卜，了解到奇牙项链中的一块碎片很可能就在你们身上。然而这位冰原狼移动太快……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["叫我史塔克。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["哦，抱歉，史塔克你好。由于史塔克移动太快，我们没有办法让它停下，我们才出此下策，想先暂时困住它。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["没错！你们看，我们用的陷阱只会困人，不会伤人！我们绝对没有伤害你们的心思！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["那你们对我们造成的伤害怎么说？我们现在连动都动不了，这我可没感受出你们的“好意”啊！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["大家的伤也不用担心，我们随身带了药物，可以立刻让你们复原。刚才你们气势汹汹地冲过来，我们也没有办法……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["真的很抱歉，我这就治好你们。"]),new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,2,"mc2"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["我能感受得到你们的诚意。嗯……你们刚才说，身边的这位小精灵是“月之子”？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.KILLUA,["奇牙？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["不错，怎么了？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["尊敬的月之子，您好。我们是来自于太古雪峰的冰原狼一族，我们的名字你们也知道了，我叫史塔克。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["月之子……唉。其实在很久以前，我们这一族并不是冰原狼，而是普通的狼族。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["不是冰原狼？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["是的。众所周知，狼族对月亮是情有独钟的，月之力可以让我们更加强大。但是，一个恶魔的到来，改变了这一切……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["当年发生了什么？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["一名号称“邪念之神”的恶魔来到了我们的领地，声称这一片土地已经被它占据。我们奋起反抗，但是，它太强大了，我们的战斗一败涂地。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["最终，我们被赶出了自己的家园，几经辗转，只能在这天寒地冻的雪峰之上安居落户。经过几代艰难的繁衍，我们成为了冰原狼一族。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["这里寒风凛冽，漫天飞雪，终年不见天日。到了夜里，连云都看不见，更别说我们最爱的月亮了。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["几百年来，我们无时无刻都想回到过去那片富饶的土地上，能够再闻一闻泥土的芳香，感受月光的皎洁……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.KILLUA,["奇牙奇牙……奇牙……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["抱歉，有点失态了。言归正传，前段时间，我们的一名族人在雪原上飞驰时，捡到了一枚碎片。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["这枚碎片散发着月亮的力量，这是我们几百年来第一次感受到这种美好的气息。我们本想将其供奉起来，原来它却是月之子所丢失的东西。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["尊敬的月之子，我们这就将其归还于你。希望你能代表月亮，从此庇佑我们一族，让我们繁衍生息，壮大起来。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.KILLUA,["奇牙！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["谢谢你！如果让我们遇到那个“邪念之神”，我们一定把它打跑，让你们重新回到故乡！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.KILLUA,["奇牙奇牙！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHI_TA_KE,["谢谢你们，陌生人。月亮在上，我们一族终于迎来了转机！"]),new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,3,"mc3"])];
            TaskDiaLogManager.single.playStory(arr,function():void
            {
               KTool.showMapAllPlayerAndMonster();
               NpcController.npcVisible = true;
               LevelManager.iconLevel.visible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               MapManager.currentMap.controlLevel.removeChild(mc);
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("look_for_son_of_moon_step3_movie"),function():void
               {
                  BonusController.showDelayBonus(1613);
                  BonusController.removeDelay(1613);
                  ModuleManager.showAppModule("LookForSonOfMoonPanel");
               });
            });
         });
      }
      
      public static function init11007() : void
      {
         MapManager.currentMap.controlLevel.addEventListener(MouseEvent.CLICK,onClickTask6);
      }
      
      public static function destroy11007() : void
      {
         MapManager.currentMap.controlLevel.removeEventListener(MouseEvent.CLICK,onClickTask6);
      }
      
      private static function refresh1107(param1:Function) : void
      {
         var fun:Function = param1;
         getState(2,function(param1:int):void
         {
            var _loc2_:* = false;
            var _loc3_:int = 0;
            while(_loc3_ < 5)
            {
               _loc2_ = KTool.getBit(param1,_loc3_ + 1) > 0;
               MapManager.currentMap.controlLevel["mcBoss"]["btnBoss" + _loc3_].visible = !_loc2_;
               _loc3_++;
            }
            if(param1 == 31)
            {
               finishTask6();
            }
            else
            {
               BonusController.removeDelay(1613);
            }
            fun();
         });
      }
      
      private static function onClickTask6(param1:MouseEvent) : void
      {
         var onFightOver:Function = null;
         var index:int = 0;
         var e:MouseEvent = param1;
         onFightOver = function(param1:PetFightEvent):void
         {
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
            refresh1107(function():void
            {
            });
         };
         var name:String = String(e.target.name);
         if(name.substr(0,7) == "btnBoss")
         {
            BonusController.addDelay(1613);
            index = int(name.replace("btnBoss",""));
            Alert.show("即将进入战斗，你准备好了吗？",function():void
            {
               sendCmd(5,index + 1,function():void
               {
                  FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFightOver);
                  FightManager.fightNoMapBoss("史塔克",BOSS_ID);
               });
            });
         }
      }
      
      private static function getState(param1:int, param2:Function) : void
      {
         var type:int = param1;
         var fun:Function = param2;
         KTool.getForeverNum(FOREVER_STATE,function(param1:int):void
         {
            var _loc2_:int = type < 2 ? 4 : 5;
            var _loc3_:* = param1 >> type * 4 & (1 << _loc2_) - 1;
            fun(_loc3_);
         });
      }
      
      private static function task1(param1:Function) : void
      {
         var fun:Function = param1;
         if(BitBuffSetClass.getState(22969))
         {
            fun();
            return;
         }
         MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function(param1:MapEvent):void
         {
            var e:MapEvent = param1;
            MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
            KTool.hideMapAllPlayerAndMonster();
            NpcController.npcVisible = false;
            LevelManager.iconLevel.visible = false;
            MapObjectControl.hideOrShowAllObjects(false);
            ResourceManager.getResource(ClientConfig.getActiveUrl("look_for_son_of_moon_step3_1"),function(param1:MovieClip):void
            {
               var mod1:TaskMod;
               var mod2:TaskMod;
               var mod3:TaskMod;
               var mod4:TaskMod;
               var mod5:TaskMod;
               var mod6:TaskMod;
               var mod7:TaskMod;
               var mod8:TaskMod;
               var mod9:TaskMod;
               var mod10:TaskMod;
               var mod11:TaskMod;
               var mc:MovieClip = param1;
               MapManager.currentMap.controlLevel.addChild(mc);
               mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
               mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["怎么样呀，先知先生，这最后一块碎片有着落吗？"]);
               mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["唔……有点意思。之前一块碎片在水底，这次的碎片却是在天上。"]);
               mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["什么，天上？这……难道这块碎片自己会飞？"]);
               mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["从占卜结果来看，这块碎片一直在一个区域内飞速移动。碎片自己肯定是不会飞的，我估计很有可能是正被一只鸟衔在嘴里……"]);
               mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["可是不对啊……如果是鸟，肯定有落在树上休息的时候。而且这高度，鸟也飞不上去啊……"]);
               mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["！！！我知道了！"]);
               mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["这块碎片一定是落在了上古雪峰上，还正巧被一个快速移动中的精灵拿到了。唔，是了，上古雪峰正好就在那个方向。"]);
               mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["上古雪峰？哇哦，听起来是一个古老而神秘的地方呢。"]);
               mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["好！下一个目标地点，上古雪峰！出发！"]);
               mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KILLUA,["奇牙奇牙！"]);
               TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11],function():void
               {
                  KTool.showMapAllPlayerAndMonster();
                  NpcController.npcVisible = true;
                  LevelManager.iconLevel.visible = true;
                  MapObjectControl.hideOrShowAllObjects(true);
                  MapManager.currentMap.controlLevel.removeChild(mc);
                  BitBuffSetClass.setState(22969,1);
                  fun();
                  sendCmd(3,1);
               });
            });
         });
         MapManager.changeMap(1135);
      }
      
      private static function task2(param1:Function) : void
      {
         var fun:Function = param1;
         if(BitBuffSetClass.getState(22970))
         {
            fun();
            return;
         }
         KTool.hideMapAllPlayerAndMonster();
         NpcController.npcVisible = false;
         LevelManager.iconLevel.visible = false;
         MapObjectControl.hideOrShowAllObjects(false);
         ResourceManager.getResource(ClientConfig.getActiveUrl("look_for_son_of_moon_step3_2"),function(param1:MovieClip):void
         {
            var mod1:TaskMod;
            var mod2:TaskMod;
            var mod3:TaskMod;
            var mod4:TaskMod;
            var mod5:TaskMod;
            var mod6:TaskMod;
            var mod7:TaskMod;
            var mod8:TaskMod;
            var mod9:TaskMod;
            var mod10:TaskMod;
            var mod11:TaskMod;
            var mod12:TaskMod;
            var mc:MovieClip = param1;
            MapManager.currentMap.controlLevel.addChild(mc);
            mod1 = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["什……什么东西？你们看到了吗，刚才有一大团白色的东西从我身边蹦过去，一下子就不见了！"]);
            mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["好像是一团会飞的毛球？"]);
            mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["你胡说什么呢，毛球怎么可能会飞嘛！"]);
            mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["卡璐璐说的其实也不是全错。我想很有可能它就是那只带着碎片迅速移动的精灵了。它的身上覆满毛皮，速度又非常的快，所以看起来像是一只会飞的球。"]);
            mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["看吧，我说的肯定没错。"]);
            mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["可是它跑这么快，我们怎么让它停下来，问它有没有带着我们的碎片啊？"]);
            mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KILLUA,["奇牙！奇牙奇牙……奇牙奇牙！"]);
            mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHEN_MI_REN_YUE,["奇牙说，它已经感受到了碎片的气息，碎片肯定就在这附近。"]);
            mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["什么？那还迟疑什么，赶快捉住它！"]);
            mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["可是它跑这么快，我们怎么捉呀？"]);
            mod12 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["这……哎呀，我们总不能干站在这里，什么都不做吧？先试试再说！"],["好吧，我们试试。"]);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12],function():void
            {
               KTool.showMapAllPlayerAndMonster();
               NpcController.npcVisible = true;
               LevelManager.iconLevel.visible = true;
               MapObjectControl.hideOrShowAllObjects(true);
               MapManager.currentMap.controlLevel.removeChild(mc);
               BitBuffSetClass.setState(22970,1);
               fun();
            });
         });
      }
   }
}
