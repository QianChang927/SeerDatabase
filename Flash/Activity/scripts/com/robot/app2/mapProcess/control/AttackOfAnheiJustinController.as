package com.robot.app2.mapProcess.control
{
   import com.robot.app.panel.MapNamePanel;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.ui.alert.Alarm2;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AttackOfAnheiJustinController
   {
      
      private static var _taskMc:MovieClip;
      
      private static var _foreverVal:uint;
      
      private static const _mapAnimate:String = "AttackOfAnheiJustin_Animate";
       
      
      public function AttackOfAnheiJustinController()
      {
         super();
      }
      
      public static function clickEq() : void
      {
         freshStatus(function():void
         {
            if(_foreverVal >= 63)
            {
               Alarm2.show("你已经完成了本活动了哦！");
            }
            else
            {
               MapManager.changeMapWithCallback(11176,start);
            }
         });
      }
      
      private static function freshStatus(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([8583],function(param1:Array):void
         {
            _foreverVal = param1[0];
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function loadTaskMc(param1:Function) : void
      {
         var fun:Function = param1;
         if(_taskMc == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate(_mapAnimate),function(param1:MovieClip):void
            {
               _taskMc = param1;
               MapManager.currentMap.topLevel.addChild(_taskMc);
               _taskMc.addEventListener(MouseEvent.CLICK,onClick);
               if(fun != null)
               {
                  fun();
               }
            });
         }
         else
         {
            if(_taskMc.parent == null)
            {
               MapManager.currentMap.topLevel.addChild(_taskMc);
            }
            if(fun != null)
            {
               fun();
            }
         }
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var _loc2_:uint = 0;
         switch(param1.target.name)
         {
            case "bossBtn_0":
            case "bossBtn_1":
            case "bossBtn_2":
               _loc2_ = uint(param1.target.name.split("_")[1]);
               ModuleManager.showAppModule("AttackOfAnheiJustinFightPanel" + (_loc2_ + 1));
         }
      }
      
      public static function start() : void
      {
         if(BitBuffSetClass.getState(23117) == 0)
         {
            StatManager.sendStat2014("0318暗黑贾斯汀的突袭","开始前置剧情","2016运营活动");
            loadTaskMc(function():void
            {
               playStory(getStroy(0),function():void
               {
                  BitBuffSetClass.setState(23117,1);
                  initStep(5);
                  ModuleManager.showAppModule("AttackOfAnheiJustinFightPanel1");
               });
            });
         }
         else
         {
            freshStatus(function():void
            {
               if(_foreverVal == 0)
               {
                  initStep(5);
               }
               else if(_foreverVal == 1)
               {
                  initStep(7);
               }
               else if(_foreverVal < 31)
               {
                  initStep(8);
               }
               else if(_foreverVal < 63)
               {
                  endSetp3();
               }
               else
               {
                  destroy();
               }
            });
         }
      }
      
      private static function initStep(param1:uint) : void
      {
         var frame:uint = param1;
         loadTaskMc(function():void
         {
            _taskMc.gotoAndStop(frame);
            _taskMc.mc.gotoAndStop(_taskMc.mc.totalFrames);
         });
      }
      
      public static function endSetp1() : void
      {
         loadTaskMc(function():void
         {
            playStory(getStroy(1),function():void
            {
               freshStatus(start);
               ModuleManager.showAppModule("AttackOfAnheiJustinFightPanel2");
            });
         });
      }
      
      public static function endSetp2() : void
      {
         loadTaskMc(function():void
         {
            playStory(getStroy(2),function():void
            {
               freshStatus(start);
               ModuleManager.showAppModule("AttackOfAnheiJustinFightPanel3");
            });
         });
      }
      
      public static function endSetp3() : void
      {
         loadTaskMc(function():void
         {
            playStory(getStroy(3),function():void
            {
               KTool.doExchange(8516,function():void
               {
                  destroy();
                  MapManager.changeMap(1);
               });
            });
         });
      }
      
      public static function destroy() : void
      {
         if(_taskMc != null)
         {
            _taskMc.removeEventListener(MouseEvent.CLICK,onClick);
            DisplayUtil.removeForParent(_taskMc);
            _taskMc = null;
         }
      }
      
      private static function playStory(param1:Array, param2:Function = null, param3:Boolean = true) : void
      {
         var storyArr:Array = param1;
         var fun:Function = param2;
         var showIcon:Boolean = param3;
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         if(_taskMc.parent == null)
         {
            MapManager.currentMap.topLevel.addChild(_taskMc);
         }
         MapNamePanel.hide();
         ToolBarController.panel.hide();
         MapManager.currentMap.topLevel.mouseChildren = true;
         MapManager.currentMap.topLevel.mouseEnabled = true;
         LevelManager.iconLevel.visible = false;
         TaskDiaLogManager.single.playStory(storyArr,function():void
         {
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            if(showIcon)
            {
               LevelManager.iconLevel.visible = true;
               ToolBarController.panel.show();
               MapNamePanel.show();
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private static function getStroy(param1:uint) : Array
      {
         var _loc2_:Array = [];
         switch(param1)
         {
            case 0:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,1,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["这都好几天了，我们还是没有发现贾斯汀站长的踪迹。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["那帮可恶的海盗，他们一定是在太空站被炸时偷走了贾斯汀站长的芯片，利用它复制出了暗黑军团！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["呜呜呜……贾斯汀站长，你可一定要平安无事呀！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["你们能够平安回来，就是最大的幸运了。这次我们出征洛亚神域，就是要将艾伯中将绳之以法。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["我承诺，我一定会安全地带着贾斯汀回来！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,2,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["我在末日之泉寻找开启叹息之墙的叹息晶核，结果碰到了暗黑军团。他们看起来像是正在准备袭击我们的部队！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["哼，一定是被我们赛尔先锋队击败，想要回来找场子！依我看啊，直接出击，把他们再打一顿，教他们做人！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["难不成有什么圈套？我们还是小心为妙……哎哎哎，阿铁打你别冲动，快回来！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["……阿铁打已经走了。真是的，这个家伙好了伤疤忘了痛，真是神经粗大！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SHIPER,["你们也快去看看吧，阿铁打也好有个照应。不过要千万小心才是。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["好的船长！卡璐璐，我们走！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,3,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["哦？这不是之前被我们抓走的小家伙吗？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["你们还真是有胆量啊，跑到这里来，是想阻挡我们行动的脚步吗？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["哼，你们这些黑乎乎的家伙，是不是又在打什么坏主意！这一次，我们绝对不会再让你们得逞了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["哈哈哈，看来你们已经遗忘了被我们所支配的恐惧了！也罢，就让你们再感受一次，自己力量的渺小！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,4,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["好啊，就凭你们这几个人？我一个就能打你们一群！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["就知道战斗的蠢货，你以为我们会空手过来吗？让你们长长见识，接下来出现的，可是我们最新的科研成果！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,5,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["阿铁打，小心！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["哼，怕了吗？艾伯大人的计划到了最重要的时刻，怎么会让你们干扰！尝尝机械重炮的愤怒吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["上吧，伽丘！踩扁他们！"],["准备迎战！"]));
               break;
            case 1:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,6,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["不堪一击！哼，你刚才不是很能吗？来啊，我能打十个！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["有点意思，不愧是赛尔号最能打的战士！不过，你以为身为最新科技结晶的它就这么脆弱？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["咦，它又动了起来！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,7,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["可笑，你们居然以为，我们会带一个一碰就坏的废铁疙瘩过来？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["试试伽丘第二形态的厉害吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["好，那我连它也拆给你看！到时候你可别哭出来！"]));
               break;
            case 2:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,6,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["啊哈！听你夸起来很厉害的样子，好像也不怎么样嘛。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["这就是你们所谓的最新科研成果吗？看到这样的实力，我也就放心了。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["呃……咳！它刚刚研制出来，这是第一次实战测试。这些都是意外，意外……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["但是你们还是太轻敌了！其实他还有第三形态！分身吧，我的战争猛兽！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,8,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["即使是一个试验品，也不是你们所能对抗的，乖乖放下武器投降吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["跪伏于伟大的组织面前，接受神圣的净化吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["我觉得你还是高兴的太早了，等我们被打趴下了，你再耀武扬威不迟。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["这大铁疙瘩明显已经是强弩之末了，赶紧干掉他！"]));
               break;
            case 3:
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,9,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["看来这次实验的成果还是难以令人满意啊……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["实验室里的那帮蠢货，每天挥霍那么多的钱，结果一个能用的作品都拿不出来。这次回去，一定要好好反映一下。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["伟大的赛尔号不是你们所能对抗的，乖乖放下武器投降吧！跪伏于伟大的赛尔号面前，接受神圣的净化吧！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["嘿嘿，刚才你对我们说的话，我现在原话送还！怎么样，你还有什么本事拿出来看看啊？"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["少废话，快把贾斯汀站长的芯片交出来！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["真是小人得志。我不介意陪你们玩玩，但是我今天的任务已经完成了。现在，我要回去汇报了。"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ANHEIJUSTIN,["很快，我们又会碰面的，不要着急……"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[_taskMc,10,"mc"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["哎呀，又跑了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.ATIEDA,["这些海盗呀，就是三斤重的鸭子二斤半的嘴，光会嘴上说，没有真本事！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.KALULU,["我们还是赶紧回去吧，叹息之墙即将开启，营救贾斯汀站长的最终战役就要开始了！"]));
               _loc2_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SAIXIAOXI,["嗯！"]));
         }
         return _loc2_;
      }
   }
}
