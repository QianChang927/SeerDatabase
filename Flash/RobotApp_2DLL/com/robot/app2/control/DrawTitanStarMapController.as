package com.robot.app2.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.info.fightInfo.attack.FightOverInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.events.MouseEvent;
   
   public class DrawTitanStarMapController
   {
      
      private static var step:uint;
      
      private static var Step2State:int = 0;
      
      private static const FullMovie:String = "DrawTitanStarMapMovie";
      
      private static var _isInit:Boolean;
       
      
      public function DrawTitanStarMapController()
      {
         super();
      }
      
      public static function InitForMap(param1:BaseMapProcess) : void
      {
         if(MapManager.currentMap.id == 10972)
         {
            MapManager.currentMap.depthLevel["npc_titan"].addEventListener(MouseEvent.CLICK,onClick);
         }
         if(MapManager.currentMap.id == 10973)
         {
            MapManager.currentMap.depthLevel["npc_boshi"].addEventListener(MouseEvent.CLICK,onClick);
         }
         if(MapManager.currentMap.id == 10974)
         {
            MapManager.currentMap.depthLevel["npc_fengshen"].addEventListener(MouseEvent.CLICK,onClick);
         }
         if(MapManager.currentMap.id == 10975)
         {
            MapManager.currentMap.depthLevel["npc_shilaimu"].addEventListener(MouseEvent.CLICK,onClick);
         }
         if(MapManager.currentMap.id == 10976)
         {
            MapManager.currentMap.depthLevel["npc_moxini"].addEventListener(MouseEvent.CLICK,onClick);
         }
         if(MapManager.currentMap.id == 10977)
         {
            MapManager.currentMap.depthLevel["npc_chuanzhang"].addEventListener(MouseEvent.CLICK,onClick);
         }
         if(MapManager.currentMap.id == 10978)
         {
            MapManager.currentMap.depthLevel["npc_puni"].addEventListener(MouseEvent.CLICK,onClick);
         }
         updateState();
      }
      
      public static function Destroy() : void
      {
         if(MapManager.currentMap.id == 10972)
         {
            MapManager.currentMap.depthLevel["npc_titan"].removeEventListener(MouseEvent.CLICK,onClick);
         }
         if(MapManager.currentMap.id == 10973)
         {
            MapManager.currentMap.depthLevel["npc_boshi"].removeEventListener(MouseEvent.CLICK,onClick);
         }
         if(MapManager.currentMap.id == 10974)
         {
            MapManager.currentMap.depthLevel["npc_fengshen"].removeEventListener(MouseEvent.CLICK,onClick);
         }
         if(MapManager.currentMap.id == 10975)
         {
            MapManager.currentMap.depthLevel["npc_shilaimu"].removeEventListener(MouseEvent.CLICK,onClick);
         }
         if(MapManager.currentMap.id == 10976)
         {
            MapManager.currentMap.depthLevel["npc_moxini"].removeEventListener(MouseEvent.CLICK,onClick);
         }
         if(MapManager.currentMap.id == 10977)
         {
            MapManager.currentMap.depthLevel["npc_chuanzhang"].removeEventListener(MouseEvent.CLICK,onClick);
         }
         if(MapManager.currentMap.id == 10978)
         {
            MapManager.currentMap.depthLevel["npc_puni"].removeEventListener(MouseEvent.CLICK,onClick);
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         switch(param1.currentTarget.name)
         {
            case "npc_boshi":
            case "npc_fengshen":
            case "npc_shilaimu":
            case "npc_moxini":
               if(KTool.getBit(step,3) == 0)
               {
                  Start(2);
               }
               break;
            case "npc_titan":
               if(KTool.getBit(step,1) == 0)
               {
                  Start(1);
               }
               break;
            case "npc_puni":
               if(KTool.getBit(step,5) == 0)
               {
                  Start(3);
               }
               break;
            case "npc_chuanzhang":
               if(KTool.getBit(step,7) == 0)
               {
                  Start(4);
               }
         }
      }
      
      public static function updateState() : void
      {
         _isInit = false;
         KTool.getMultiValue([8096,8097],function(param1:Array):void
         {
            step = param1[0];
            Step2State = param1[1];
            _isInit = true;
         });
      }
      
      public static function Start(param1:int) : void
      {
         var index:int = param1;
         TaskDiaLogManager.single.playStory(GetDialogArr(index),function():void
         {
            if(index == 1)
            {
               KTool.socketSendCallBack(41687,function(param1:*):void
               {
                  updateState();
                  ModuleManager.showAppModule("DrawTitanStarMapPanel",1);
               },[1]);
            }
            else if(index == 2)
            {
               if(Step2State == 0)
               {
                  KTool.doExchange(6874,function():void
                  {
                     ModuleManager.showAppModule("DrawTitanStarMapTipPanel",1);
                  });
               }
               else if(Step2State == 1)
               {
                  fight(1);
               }
               else if(Step2State == 2)
               {
                  KTool.doExchange(6874,function():void
                  {
                     ModuleManager.showAppModule("DrawTitanStarMapTipPanel",2);
                  });
               }
               else if(Step2State == 3)
               {
                  fight(2);
               }
               else if(Step2State == 4)
               {
                  KTool.doExchange(6874,function():void
                  {
                     ModuleManager.showAppModule("DrawTitanStarMapTipPanel",3);
                  });
               }
               else if(Step2State == 5)
               {
                  fight(3);
               }
               else if(Step2State == 6)
               {
                  KTool.socketSendCallBack(41687,function(param1:*):void
                  {
                     updateState();
                     ModuleManager.showAppModule("DrawTitanStarMapPanel",2);
                  },[3]);
               }
            }
            else if(index == 3)
            {
               KTool.socketSendCallBack(41687,function(param1:*):void
               {
                  updateState();
                  ModuleManager.showAppModule("DrawTitanStarMapPanel",3);
               },[5]);
            }
            else if(index == 4)
            {
               KTool.socketSendCallBack(41687,function(param1:*):void
               {
                  updateState();
                  ModuleManager.showAppModule("DrawTitanStarMapPanel",4);
               },[7]);
            }
         });
      }
      
      private static function GetDialogArr(param1:int) : Array
      {
         if(param1 == 1)
         {
            return [new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["这位……就是泰坦吗？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["您好！我是一名来自于赛尔号的小赛尔，请问我能问您几个问题吗？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["……？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["您好！哈喽！泰坦大人！嗨！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["……？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["……他这样完全听不到我说话呀。看来我个子太小，说话得大声点。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["泰！坦！大！人！您！好！请！问！我！能！问！您！一！个！问！题！吗！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["唔……是谁在跟我说话？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["在这里！看这里！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["哦！哎呀，原来就在我的脚边。小不点儿，你就是谱尼说的“赛尔”了吧？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["是的！马上赛尔号就要进行星域穿越了，我们都很紧张。泰坦大人，我能问您几个有关泰坦星域那边的问题吗？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["不要紧张，小赛尔。有什么问题尽管问吧，我知无不谈。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["那真是太谢谢您了，泰坦大人！首先我想知道的是，泰坦星域是一片什么样的世界呢？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["你这个问题问的有点笼统哦，那我也只能大致地回答你一下。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["泰坦星域和你们现处的宇宙其实是平行的，两者间的唯一通道就是“星际之门”。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["你可能会很奇怪，为什么你们从来没有听说过“泰坦星域”这个概念呢？事实上，泰坦星域远比你们想象的要古老得多。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["在很久很久以前，泰坦星域就已经诞生了。与你们的宇宙一样，泰坦星域也一直处于缓慢的发展壮大中。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["但是，可能是由于宇宙环境的差异，泰坦星域的发展速度远远超过了你们的宇宙。很快，就有很多极为强大的精灵诞生，并主宰了泰坦星域。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["然而，强大的力量总是伴随着强大的欲望；而欲望的成长总是伴随着阴谋的诞生。很快，一些充满欲望而实力强大的精灵们便掌握了泰坦星域的大部分资源；在他们的邪恶统治下，泰坦星域岌岌可危。甚至，这还危及到了你们的宇宙。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["因此，在很久很久以前，我将星际之门封闭，将两个世界完全隔绝开来，并留下了玛努诺作为星际之门的看守者。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["原来星际之门是你封闭的呀？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["是的。距离我封闭星际之门的日子已经过去了太久，连我都已记不清具体的岁月……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["当年我封闭它时，一是为了保护你们的宇宙不受侵害，二是为了留下一颗希望的种子—将来能有一天，由你们进入泰坦星域，拯救那个世界！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["原来是这样，信息量有点大，我需要消化一下……那么泰坦大人，您能跟我说说，泰坦星域和我们的宇宙有什么区别吗？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["其实两片宇宙从大致上来说是差不多的，两者都是由生存区域和无尽虚空组成。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["但是有所区别的是，你们的宇宙是由“星球”组成“星系”，而泰坦星域是由“大陆”组成“星云”。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["星云？星云不是一系列星际物质的集合体吗？远远看去像云朵一样飘在宇宙中？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["啊，你们的宇宙也有星云的概念。但是，显然泰坦星域的“星云”和你们的“星云”是不同的。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["泰坦星域的生灵们都生活在不同的大陆上，而大陆和大陆之间彼此聚集，就形成了一片片“星云”。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["这些只是一些外在的表现形式，其实具体来说跟你们的宇宙区别并不是很大。有高山，有长河，有森林，有雪原，每一个大陆也都有着它自己的特色。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["原来是这样，还真是一个充满魅力的未知世界呢！谢谢泰坦大人！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["小赛尔，是时候了！希望的种子已经生根发芽，距离参天大树只剩战火的浇灌了！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["泰坦星域在混乱中滞留了太久，而你们的宇宙已经在和平中成长了起来。如今的你们，已经拥有了面对泰坦星域的力量！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.TITAN,["星际之门已经打开，泰坦星域需要你们去拯救！加油，小赛尔！"]),new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[FullMovie,true])];
         }
         if(param1 == 2)
         {
            if(Step2State == 0)
            {
               return [new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["博士！博士！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["咦，这不是小赛尔吗？感觉最近总是见到你呀。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["嘿嘿，这不是要进入新的星域了嘛，心里七上八下的，准备工作当然是做的越多越好啦。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["那是当然，每天我都在为这件事情烦恼，手头要做的研究也越来越多。不过一想到又有一个全新的世界在等待我的发掘，还有些小激动呢。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["不知道博士对泰坦星域的精灵了解多少？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["了解的还真不多。从星际之门打开到现在，一只泰坦星域的精灵都没有出现，我也没办法具体去了解它们的生活习性和能力。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哦，这样啊……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["不过你也不用灰心，前几天我想到了一个好办法。玛努诺虽说不是泰坦星域的精灵，但是它无数年来一直待在星际之门的另一侧，或许可以通过它的样本进行成分分析，知道我们想要的结果。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["听起来很厉害的样子……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["具体的过程确实挺麻烦。不过现在玛努诺的样本我已经弄到了，这可是我花了好大功夫才找到的一小滴血液；接下来再组装出分析样本的机器，就可以进行分析了！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好棒！博士，不如我也来帮你组装机器吧！只要你告诉我应该怎么做，我绝对不会出差错的！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["所以现在的问题就在这儿了—我还缺少3种材料：自然之眼、永恒沙漏和智慧之石。只有有了他们我才能将这台分析器组装出来。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["博士你懂的，收集材料我在行！快告诉我去哪里可以获得这几种材料吧！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["首先，我需要你帮我找来一份“0xff0000自然之眼0xffffff”。这种贴近自然的材料找0xff0000玄元风神0xffffff绝对没错的！你可以去0xff0000风息之眼0xffffff找到它！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好的，我这就去！"])];
            }
            if(Step2State == 1)
            {
               return [new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你好，玄元风神。请问你听说过一种叫“自然之眼”的材料吗？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.XUAN_YUAN_FENG_SHEN,["当然了，这种材料我自己就有。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太好了，能给我一块吗？一块就好！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.XUAN_YUAN_FENG_SHEN,["虽然不是什么值钱的东西，但也不能白白给你。这样吧，你若能通过我的试炼，它便作为奖励送给你吧！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["没问题，那就让我试试吧！"])];
            }
            if(Step2State == 2)
            {
               return [new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["博士！博士！自然之眼我帮你带回来啦！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["果然厉害。下一种材料是“0xff0000永恒沙漏0xffffff”，你去0xff0000永恒之树0xffffff那里问问0xff0000黄金史莱姆0xffffff吧！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好的，你就等着我的好消息吧！"])];
            }
            if(Step2State == 3)
            {
               return [new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你好，黄金史莱姆。请问你听说过一种叫“永恒沙漏”的材料吗？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SLIME_GOLD,["当然了，这种材料我自己就有。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太好了，能给我一个吗？一个就好！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SLIME_GOLD,["虽然不是什么值钱的东西，但也不能白白给你。这样吧，你若能通过我的试炼，它便作为奖励送给你吧！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["没问题，那就让我试试吧！"])];
            }
            if(Step2State == 4)
            {
               return [new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["博士！博士！永恒沙漏我帮你带回来啦！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["果然厉害。下一种材料是“0xff0000智慧之石0xffffff”，你去0xff0000创世广场0xffffff那里问问0xff0000莫西尼0xffffff吧！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好的，你就等着我的好消息吧！"])];
            }
            if(Step2State == 5)
            {
               return [new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你好，莫西尼。请问你听说过一种叫“智慧之石”的材料吗？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOXINI,["当然了，这种材料我自己就有。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["太好了，能给我一个吗？一个就好！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.MOXINI,["虽然不是什么值钱的东西，但也不能白白给你。这样吧，你若能通过我的试炼，它便作为奖励送给你吧！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["没问题，那就让我试试吧！"])];
            }
            if(Step2State == 6)
            {
               return [new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["博士！博士！智慧之石我帮你带回来啦！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["果然厉害。这下3种材料全部集齐了，可以开始研究了！你等我一会儿哦！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["好的博士，我就在这里等一会儿好了！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["…………（10分钟过去）"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["…………（20分钟过去）"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["…………（30分钟过去）"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["……博士？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["呼……呼……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["……博士？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["呼……呼……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["博士！你怎么睡着啦！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["啊！噢噢噢……那个，我刚做完实验，有点累就不小心睡着了。你别慌，结果已经出来了。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["真的吗！快跟我说说泰坦星域的精灵有什么能力吧！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["唔……从分析上来看，他们那边的精灵其实跟我们这边的精灵能力差不多。精灵的种类相似，能力相似，但是平均实力会比我们这里的精灵要强上一些。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["但是有一种物质，我在我们这里的精灵身上从未发现过！它似乎对着各种元素力量有着天然的抵抗力，我怀疑这是泰坦星域的精灵们在长期的战斗中所分泌出的一种保护物质。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["通过这种物质，他们对元素技能会有更强的抵抗能力，甚至对毒等各种异常状态也有着更强的抗性！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["还真是可怕，看来，如果我们跟他们之间爆发战斗，将会是一场不小的挑战啊……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.DOCTOR,["没错……"]),new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[FullMovie,true])];
            }
         }
         else
         {
            if(param1 == 3)
            {
               return [new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["您好，谱尼大人。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["你好，亲爱的赛尔。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["您能不能告诉我，泰坦星域的生存环境是怎样的呢？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["我也没有去过泰坦星域，我对它的了解仅仅是来自于和泰坦的交流以及对玛努诺身上元素的感悟。怎么，之前泰坦没有告诉你吗？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我当时有些紧张，忘了问了，嘿嘿……"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["其实泰坦星域和我们这里一样，都是一片非常适合精灵生存的空间。从古至今，泰坦星域也诞生了许许多多各式各样的精灵，而他们大多数与我们一样，都是元素型精灵。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哇哦，两片空间是一样的吗？那我们也可以正常生存啦！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我还以为需要给自己的精灵们打造一些特殊装备，方便他们在新的空间中生存呢！我们机器人倒是不怕，有油有电就可以啦！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["是你多虑了。泰坦星域和我们这里一样，有山有水，有花有草，大同小异。但是他们的确是有一些不同之处，比如随时会出现的空间坍塌，不太常见的尘埃风暴等等。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["空间坍塌！听起来好恐怖啊！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["你放心，泰坦说，一般这些天灾都不会出现，你们需要特别注意的是人祸：泰坦星域的邪恶力量格外强大，这也是泰坦开启星际之门，希望我们能够帮助他们的原因之一。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["哼，坏人肯定会得到惩罚的！让他们见识见识我们的厉害！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.PUNI,["莫要大意。泰坦星域比我们这片宇宙要危险的多。正恶双方频繁的较量，也让泰坦星域的精灵们比我们这里要普遍强大一些。一旦进入泰坦星域，又是一次关系到存亡的挑战啊！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我明白了，谢谢您！"]),new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[FullMovie,true])];
            }
            if(param1 == 4)
            {
               return [new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["您好，罗杰船长！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["你好啊，小赛尔。你来找我有什么事吗？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["是这样的，我们很快就要穿越星际之门了，我想来问问你，我们这次出征有什么具体计划啊？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["哈哈哈，原来是这样。你来的正好，我本来还准备全船广播呢。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["那快跟我说说吧！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["首先要说的是这次出征泰坦星域的目的。一方面，我们已经拥有了足够的实力。泰坦需要我们的帮助，来驱除泰坦星域中的邪恶力量。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["另一方面呢，谱尼告诉我，无尽能源的线索在这片宇宙中已经没有了。我们必须进入泰坦星域，才有希望找到新的无尽能源！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["什么，原来还有这个计划呀！太好了，这下无尽能源又有希望了！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["是的。所以我希望大家在泰坦星域里也要多多留心，毕竟我们航行的主要目标，就是无尽能源！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["恩恩，我知道了。那么还有什么其他安排呢？"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["有啊！接下来我要说的是，具体的出征时间。我们预计在0xff000010月23日0xffffff穿过星际之门，到达泰坦星域。到了那里之后，我们首先要先找到一块合适的地方，建立起我们的临时基地。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["0xff000010月23日……下周五0xffffff嘛！我记住了！既然要建立新的基地，肯定又要破土动工啦！我到时一定会带好大量的能源和机械的！"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["没错，你真是一个机智的赛尔。我们此行，其实相当于是进入了一个完全陌生的环境，人生地不熟，一定要千万小心。"]),new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我明白！我这就回去准备，保证万无一失！"]),new TaskMod(TaskDiaLogManager.FUL_MOVIE,0,null,null,[FullMovie,true])];
            }
         }
         return null;
      }
      
      private static function fight(param1:int) : void
      {
         var index:int = param1;
         var boss:int = 5411 + index - 1;
         FightManager.fightNoMapBoss("",boss);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
         {
            var arr:Array;
            var str:String;
            var e:PetFightEvent = param1;
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
            arr = ["自然之眼","永恒沙漏","智慧之石"];
            str = "";
            if((e.dataObj as FightOverInfo).winnerID == MainManager.actorID)
            {
               NpcDialog.show(NPC.SEER,["太棒了，我获得" + str + "啦！快去把它送给0xff0000博士派特0xffffff吧！"],null,null,false,function():void
               {
                  ModuleManager.showAppModule("DrawTitanStarMapTipPanel",4);
               });
            }
         });
      }
   }
}
