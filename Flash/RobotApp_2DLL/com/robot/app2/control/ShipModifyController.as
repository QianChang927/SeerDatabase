package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.component.FightBossComponent;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.MapEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.info.pet.PetShowInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Alert;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import gs.TweenLite;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   
   public class ShipModifyController
   {
      
      private static var _map:BaseMapProcess;
       
      
      public function ShipModifyController()
      {
         super();
      }
      
      public static function initForMap(param1:BaseMapProcess) : void
      {
         _map = param1;
      }
      
      public static function nextAction() : void
      {
         getStep(function(param1:int):void
         {
            ShipModifyController["step" + (param1 + 1)]();
         });
      }
      
      public static function showTipsDialog() : void
      {
         ModuleManager.showAppModule("ShipTipsPanel");
      }
      
      public static function showMsgDialog(param1:Boolean = false) : void
      {
         ModuleManager.showAppModule("ShipMsgPanel",param1);
      }
      
      private static function step1() : void
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
         if(!checkIsInCorrectMap(10969))
         {
            showTipsDialog();
            return;
         }
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["你好，小赛尔，找我有什么事情吗？"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["罗杰船长，看你最近愁眉不展的，是有什么不好的事情要发生了吗？"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["哦，你说的是这个啊。倒是没有什么不好的事情，但是有一件很重要的事情要发生了。"]);
         mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你是指赛尔号即将穿越星际之门吗？"]);
         mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["是的。这是一件跨时代的大事，我们必须严谨对待。另一个星域的一切都是未知的，我们需要做好一切能做的准备。"]);
         mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["那你在烦恼什么呢？"]);
         mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["我最近接到机械师茜茜的报告，由于星际之门的开启，大量沉积了多年的暗物质从星际之门中喷发出来，对飞船造成了极大的损伤。"]);
         mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["现在飞船的许多地方都已经受到了损伤，有许多被暗物质侵蚀的坑洞已经出现。"]);
         mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["这种状况下，赛尔号是绝对无法顺利穿越星际之门的。当务之急，是将这些漏洞填补起来！"]);
         mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["这真的是很严重！罗杰船长，有什么需要我帮忙的地方吗？"]);
         mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["唔……这样吧，你去找一下0xff0000发明家肖恩0xffffff，看看他有没有什么办法将这些漏洞修复好。现在我们的时间很紧迫！"]);
         mod12 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["没问题，船长，我这就去！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12],function():void
         {
            sendSocket(4,1,function():void
            {
               showTipsDialog();
            });
         });
      }
      
      private static function step2() : void
      {
         if(!checkIsInCorrectMap(10968))
         {
            showTipsDialog();
            return;
         }
         ResourceManager.getResource(ClientConfig.getActiveUrl("ship_map_movie"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,1,"mc1"]);
            var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好棒！那肖恩博士，我们快把这些洞都补上吧！"]);
            var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["这……恐怕不行。"]);
            var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["咦？为什么呀，博士？"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["这种修复性超强的液态金属球是我在一次偶然的机会中发现的材料，我所拥有的数量很少，根本不足以完成整艘飞船的修复工作。"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["目前我还不知道在哪里可以获得更多的这种材料。我正在想办法寻找一种可以大量获得的材料来替代它，从而修复飞船。"]);
            var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哎呀，这个简单！派特博士整天搞研究，他那儿肯定有器材可以分析出这种液态金属球的来源！不如我去问问他吧？"]);
            var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["对啊，我怎么就没想到呢！机智的小赛尔，那你就帮我个忙，去请他帮我分析一下这个液态金属球的来源吧！"]);
            var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["义不容辞！我这就去！"]);
            _map.conLevel["npc"].visible = false;
            KTool.hideMapAllPlayerAndMonster();
            _map.conLevel.addChild(mc);
            mc.gotoAndStop(1);
            TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8],function():void
            {
               _map.conLevel.removeChild(mc);
               mc = null;
               KTool.showMapAllPlayerAndMonster();
               _map.conLevel["npc"].visible = true;
               sendSocket(4,2,function():void
               {
                  showTipsDialog();
               });
            });
         });
      }
      
      private static function step3() : void
      {
         if(!checkIsInCorrectMap(10966))
         {
            showTipsDialog();
            return;
         }
         ResourceManager.getResource(ClientConfig.getActiveUrl("ship_map_movie"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            var mod0:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,2,"mc2"]);
            var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["派特博士！上哪儿能弄到大量的这种金属球呀？"]);
            var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["从某种意义上来说，这种金属球非常常见。它来自于大多数机械系精灵的体内，是他们在日常战斗中逐渐熔炼出的一种物质。"]);
            var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太棒了！那我们赶快去找机械系精灵们帮忙，多弄一些这种金属球吧！"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["你别高兴的太早了。因为从另外一种意义上来说，它是非常难得的。只有使用某些特别的精灵技能攻击机械系精灵，才能让们掉落出这种物质。"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["原来这么麻烦啊。那您知道是哪种精灵才会使用那种技能吗？"]);
            var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["我曾经研究过一种叫“卡维尔”的精灵，他们会在对战中使用那种技能。不过我培养的那只卡维尔被雷蒙教官领去培养战斗能力了，你可以去问问他。"]);
            var mod7:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好的博士，我这就去找0xff0000雷蒙教官0xffffff，向他借来卡维尔！"]);
            _map.conLevel["npc"].visible = false;
            KTool.hideMapAllPlayerAndMonster();
            _map.conLevel.addChild(mc);
            mc.gotoAndStop(2);
            TaskDiaLogManager.single.playStory([mod0,mod1,mod2,mod3,mod4,mod5,mod6,mod7],function():void
            {
               _map.conLevel.removeChild(mc);
               mc = null;
               KTool.showMapAllPlayerAndMonster();
               _map.conLevel["npc"].visible = true;
               sendSocket(4,3,function():void
               {
                  showTipsDialog();
               });
            });
         });
      }
      
      private static function step4() : void
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
         if(!checkIsInCorrectMap(10971))
         {
            showTipsDialog();
            return;
         }
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["雷蒙教官！雷蒙教官！"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LYMAN,["哦，原来是可爱的小赛尔啊，好久没见了呢！这次来找我有什么事吗？"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["是这样的，雷蒙教官。我想跟派特博士借卡维尔用一会，博士说它前段时间被你带走训练去了。我来是想问问，能不能把卡维尔暂时借我一段时间啊？"]);
         mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LYMAN,["哈哈，原来是这样啊。把卡维尔借给你当然没有问题，它的训练已经完成了。"]);
         mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LYMAN,["说起来，这只卡维尔还真是实力出众呢。我给他定下的一个月的任务，他只花了三个星期就全部完成了。真是厉害啊！"]);
         mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LYMAN,["只不过……那只卡维尔现在暂时不在我这里了。"]);
         mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["啊？又是空欢喜一场……卡维尔去哪了呀？"]);
         mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LYMAN,["那天贾斯汀跑到我这里来玩，跟我叨叨什么新兵训练计划……然后就看到了正在做训练的卡维尔。"]);
         mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.LYMAN,["结果卡维尔就被他给强行带走了。唉，贾斯汀这家伙……你去问问他吧。"]);
         mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好的，谢谢雷蒙教官！我这就去找0xff0000贾斯汀站长0xffffff！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10],function():void
         {
            sendSocket(4,4,function():void
            {
               showTipsDialog();
            });
         });
      }
      
      private static function step5() : void
      {
         if(!checkIsInCorrectMap(10970))
         {
            showTipsDialog();
            return;
         }
         ResourceManager.getResource(ClientConfig.getActiveUrl("ship_map_movie"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["贾斯汀站长，你好！"]);
            var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["你好，小赛尔。"]);
            var mod3:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["听说雷蒙教官前些时候训练的卡维尔在你这儿，请问你能暂时将它借给我一段时间吗？我需要它的帮助！"]);
            var mod4:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["卡维尔？卡维尔……让我想想……"]);
            var mod5:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["就是一只有一个大螺旋钻头的精灵！据雷蒙教官说，你带走它是去做什么新兵计划去了。"]);
            var mod6:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["有一个大钻头……卡维尔……哦！哦！"]);
            var mod7:TaskMod = new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[mc,3,"mc3"]);
            var mod8:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["就是它！贾斯汀站长，把它借我一下吧！"]);
            var mod9:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["你应该先问问它的意见。"]);
            var mod10:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["啊，卡维尔对不起！为了找你我几乎把飞船上下跑遍了，有点心急，嘿嘿。"]);
            var mod11:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAWEIER,["客气了。你一定是有很重要的事情，我当然会帮你的。"]);
            var mod12:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["也算是巧了，我刚才看了一下训练安排，今天正好是卡维尔训练的最后一天。这样吧小赛尔，你与卡维尔对决一场，就当做是对他的训练了，如何？"]);
            var mod13:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["乐意效劳！"]);
            _map.conLevel["npc"].visible = false;
            KTool.hideMapAllPlayerAndMonster();
            _map.conLevel.addChild(mc);
            mc.gotoAndStop(3);
            TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11,mod12,mod13],function():void
            {
               _map.conLevel.removeChild(mc);
               mc = null;
               KTool.showMapAllPlayerAndMonster();
               _map.conLevel["npc"].visible = true;
               sendSocket(4,5,function():void
               {
                  showTipsDialog();
               });
            });
         });
      }
      
      private static function showFightDialog2() : void
      {
         Alert.show("即将进入战斗，你准备好了吗？",function():void
         {
            FightBossComponent.fightNoMapBoss(5410,"卡维尔",function(param1:PetFightEvent):void
            {
               var mod2:TaskMod = null;
               var mod3:TaskMod = null;
               var mod4:TaskMod = null;
               var mod5:TaskMod = null;
               var mod6:TaskMod = null;
               var mod7:TaskMod = null;
               var mod8:TaskMod = null;
               var e:PetFightEvent = param1;
               if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
               {
                  mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["不错不错，小赛尔，你的实力越来越强了！"]);
                  mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["嘻嘻，谢谢站长夸奖。大家都在努力，我也不能落下！"]);
                  mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["没错。卡维尔，你得表现也很让人满意。说实话，你是我见过的天赋最好的战士之一，你的努力也将你的天赋充分发挥了出来。"]);
                  mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAWEIER,["站长，您过誉了。都是您和雷蒙教官指导有方，如果有机会，我还会回来继续训练的。"]);
                  mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.JUSTIN,["好了，话不多说，小赛尔你快带着卡维尔去找教官雷蒙吧！"]);
                  mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["其实是要去找派特博士呢，是他指导我来找卡维尔的。走吧卡维尔，我们一起去找派特博士，可不能让他等急了！"]);
                  mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAWEIER,["好的，我们走！"]);
                  TaskDiaLogManager.single.playStory([mod2,mod3,mod4,mod5,mod6,mod7,mod8],function():void
                  {
                     showPetFollowPlayer(2919);
                     showTipsDialog();
                  });
               }
               else
               {
                  showTipsDialog();
               }
            });
         });
      }
      
      private static function step6() : void
      {
         if(!checkIsInCorrectMap(10970))
         {
            MapManager.changeMap(10970);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               showFightDialog2();
            });
         }
         else
         {
            showFightDialog2();
         }
      }
      
      private static function step7() : void
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
         if(!checkIsInCorrectMap(10966))
         {
            showTipsDialog();
            return;
         }
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["派特博士。我带着卡维尔回来啦！"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAWEIER,["博士你好，我们又见面了。"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["你好，卡维尔。我们找你，是想请你帮我们一个忙。"]);
         mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAWEIER,["好说的，派特博士。刚才在来的路上，小赛尔已经跟我说过他的请求了。穿越星际之门是一件大事，如果需要我们帮忙，我们是肯定不会推辞的。"]);
         mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAWEIER,["不过，液态金属球并不是每一只机械系精灵都会掉落的。博士你知道去哪儿可以找到这些掉落液态金属球的精灵吗？"]);
         mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["这个我的研究记录里有，唔，让我看看……"]);
         mod7 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["哦，找到了！罗布，玛卢达科，莱伯拉……这些都是机械王国的精灵。"]);
         mod8 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.KAWEIER,["好的，那我们立即动身，去机械王国找到它们吧！"]);
         mod9 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好的，走！"]);
         mod10 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["哎哎哎哎，等下，别急啊！上一次我跟机械王国配合搞了一次实验，他们留了一些精灵在这里做帮手，好像罗布他们正巧都在赛尔号飞船上呢！"]);
         mod11 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哇，真棒！那我们赶快开始收集金属球吧博士！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6,mod7,mod8,mod9,mod10,mod11],function():void
         {
            showPetFollowPlayer(2919);
            sendSocket(4,6,function():void
            {
               showTipsDialog();
            });
         });
      }
      
      private static function step8() : void
      {
         fightBoss(280,"是液态金属球！哇，卡维尔你好厉害！这样我们就可以快速修补好飞船了！","一份金属球还不够哦，看来还需要其他精灵帮帮忙。");
      }
      
      private static function step9() : void
      {
         fightBoss(281,"好棒，液态金属球越来越多了，可是看起来好像还是缺一点呢。","没事啦，可以再找莱伯拉帮帮忙！");
      }
      
      private static function step10() : void
      {
         fightBoss(282,"差不多了，还差最后一点点！","正巧哈斯塔那也在，我们可以再收集一点。");
      }
      
      private static function step11() : void
      {
         fightBoss(283,"好了！所有的液态金属球都收集好了！谢谢博士！","你太客气了，小赛尔。穿越星际之门是件大事，赛尔号飞船不容有失，我们所有的赛尔都应该行动起来为它做好准备。话不多说，快去找0xff0000发明家肖恩0xffffff吧！");
      }
      
      private static function step12() : void
      {
         var mod1:TaskMod;
         var mod2:TaskMod;
         var mod3:TaskMod;
         var mod4:TaskMod;
         var mod5:TaskMod;
         var mod6:TaskMod;
         if(!checkIsInCorrectMap(10968))
         {
            showTipsDialog();
            return;
         }
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["肖恩博士！肖恩博士！"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["哦？亲爱的小赛尔，你回来啦？看你满面春风的样子，修复船舱的材料你肯定已经弄到了吧？"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["嘻嘻，那当然！有我出马，还不是手到擒来！虽然过程有些曲折，但是你看，这些分量的液态金属球是不是够了？"]);
         mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["让我看看……嘿，还真是又好又多啊！好心的小赛尔，你可真是帮了我大忙了！不对，你可真是帮了赛尔号一个大忙了！"]);
         mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["博士哪里的话，赛尔号是我的家园，我当然要努力保护好它！这些都是我应该做的！那么博士，我们快去修复那些漏洞吧！"]);
         mod6 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHAWN,["噢噢，对对对，你看我一激动都给忘了。你看我身边就有一些漏洞，你快用液态金属球把它们修补起来吧！0xff0000点击漏洞即可进行修补哦!0xffffff"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5,mod6],function():void
         {
            sendSocket(4,7,function():void
            {
               showMsgDialog();
            });
         });
      }
      
      private static function step14() : void
      {
         var mod1:TaskMod;
         if(!checkIsInCorrectMap(10968))
         {
            showMsgDialog(true);
            return;
         }
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太棒了，这个场景的漏洞都被修补起来了！"]);
         TaskDiaLogManager.single.playStory([mod1],function():void
         {
            showMsgDialog(true);
         });
      }
      
      private static function step15() : void
      {
         var mod1:TaskMod;
         if(!checkIsInCorrectMap(10965))
         {
            showMsgDialog(true);
            return;
         }
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太棒了，这个场景的漏洞都被修补起来了！"]);
         TaskDiaLogManager.single.playStory([mod1],function():void
         {
            showMsgDialog(true);
         });
      }
      
      private static function step16() : void
      {
         var mod1:TaskMod;
         if(!checkIsInCorrectMap(10967))
         {
            showMsgDialog(true);
            return;
         }
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太棒了，这个场景的漏洞都被修补起来了！"]);
         TaskDiaLogManager.single.playStory([mod1],function():void
         {
            showMsgDialog(true);
         });
      }
      
      private static function step17() : void
      {
         var mod1:TaskMod;
         var mod2:TaskMod;
         var mod3:TaskMod;
         var mod4:TaskMod;
         var mod5:TaskMod;
         if(!checkIsInCorrectMap(10966))
         {
            showMsgDialog(true);
            return;
         }
         mod1 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太棒了，所有的漏洞都被修复好了！这下罗杰船长和肖恩博士一定很开心！"]);
         mod2 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["你真是个勤劳聪明的小赛尔呢。我觉得你完全可以担当得起“赛尔机械师”这个称号！"]);
         mod3 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["嘿嘿，博士你过奖了啦，我也是在做我自己应该做的！"]);
         mod4 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,["卡维尔对你的评价也很高呢！他的训练刚刚结束，正好需要一些实战经验来磨砺自己。小赛尔，不如你在接下来的宇宙航行中，带它一起见识一下这精彩的世界吧！"]);
         mod5 = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["不胜荣幸，派特博士！"]);
         TaskDiaLogManager.single.playStory([mod1,mod2,mod3,mod4,mod5],function():void
         {
            ModuleManager.showAppModule("ShipMainPanel");
         });
      }
      
      private static function showFightDialog(param1:int, param2:String, param3:String) : void
      {
         var bossid:int = param1;
         var modMsg1:String = param2;
         var modMsg2:String = param3;
         Alert.show("即将进入战斗，你准备好了吗？",function():void
         {
            FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
            {
               var e:PetFightEvent = param1;
               FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
               if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
               {
                  Alarm.show("你获得了一份液态金属球！",function():void
                  {
                     var mod1:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,[modMsg1]);
                     var mod2:TaskMod = new TaskMod(TaskDiaLogManager.DIALOG,NPC.BO_SHI_PAI_TE,[modMsg2]);
                     TaskDiaLogManager.single.playStory([mod1,mod2],function():void
                     {
                        showPetFollowPlayer(2919);
                        if(bossid == 283)
                        {
                           hidePetFollowPlayer();
                        }
                        showTipsDialog();
                     });
                  });
               }
               else
               {
                  showTipsDialog();
               }
            });
            FightManager.tryFight(bossid,[0,0,0,0]);
         },function():void
         {
            ModuleManager.showAppModule("ShipTipsPanel");
         });
      }
      
      private static function fightBoss(param1:int, param2:String, param3:String) : void
      {
         var bossid:int = param1;
         var modMsg1:String = param2;
         var modMsg2:String = param3;
         if(MapManager.currentMap.id != 10966)
         {
            MapManager.changeMap(10966);
            MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,function():void
            {
               MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,arguments.callee);
               showFightDialog(bossid,modMsg1,modMsg2);
            });
         }
         else
         {
            showFightDialog(bossid,modMsg1,modMsg2);
         }
      }
      
      public static function showPetFollowPlayer(param1:int) : void
      {
         var _loc2_:PetShowInfo = null;
         if(MainManager.actorModel.pet == null)
         {
            _loc2_ = new PetShowInfo();
            _loc2_.petID = param1;
            MainManager.actorModel.showPet(_loc2_);
         }
      }
      
      public static function hidePetFollowPlayer() : void
      {
         if(MainManager.actorModel.pet)
         {
            PetManager.showingInfo = null;
            MainManager.actorModel.hidePet();
            Alarm.show("你暂时将卡维尔收回了精灵胶囊!");
         }
      }
      
      private static function sendSocket(param1:int, param2:int, param3:Function = null) : void
      {
         var arg1:int = param1;
         var arg2:int = param2;
         var func:Function = param3;
         SocketConnection.sendWithCallback(47237,function(param1:SocketEvent):void
         {
            if(func != null)
            {
               func();
            }
         },arg1,arg2);
      }
      
      public static function clickCrater(param1:MouseEvent, param2:int, param3:Function = null) : void
      {
         var mc:MovieClip = null;
         var e:MouseEvent = param1;
         var args:int = param2;
         var func:Function = param3;
         mc = e.currentTarget as MovieClip;
         _map.conLevel.mouseChildren = _map.conLevel.mouseEnabled = false;
         ResourceManager.getResource(ClientConfig.getActiveUrl("ship_dig_movie"),function(param1:MovieClip):void
         {
            var movie:MovieClip = param1;
            movie.visible = true;
            movie.x = mc.x;
            movie.y = mc.y;
            _map.topLevel.addChild(movie);
            movie["mc"].gotoAndPlay(1);
            movie["mc"].addFrameScript(movie["mc"].totalFrames - 1,function():void
            {
               movie["mc"].addFrameScript(movie["mc"].totalFrames - 1,null);
               movie["mc"].visible = false;
               movie["title"].gotoAndStop(2);
               TweenLite.to(movie["title"],1,{
                  "alpha":0,
                  "onComplete":function():void
                  {
                     if(_map != null)
                     {
                        TweenLite.to(mc,1 / 24 * movie["mc"].totalFrames - 1,{"alpha":0});
                        _map.topLevel.removeChild(movie);
                        _map.conLevel.mouseChildren = _map.conLevel.mouseEnabled = true;
                        _map.conLevel.removeChild(mc);
                        sendSocket(args,KTool.getIndex(mc) + 1,function():void
                        {
                           mc = null;
                           if(func != null)
                           {
                              func();
                           }
                        });
                     }
                  }
               });
            });
         });
      }
      
      public static function getStep(param1:Function = null) : void
      {
         var func:Function = param1;
         KTool.getMultiValue([2553],function(param1:Array):void
         {
            if(func != null)
            {
               func(int(param1[0]));
            }
         });
      }
      
      private static function checkIsInCorrectMap(param1:int) : Boolean
      {
         return MapManager.currentMap.id == param1;
      }
      
      public static function destroy() : void
      {
         _map = null;
      }
   }
}
