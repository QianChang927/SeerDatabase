package com.robot.app.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.ItemInBagAlert;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class IronCollectActivity
   {
      
      private static var _map:BaseMapProcess;
      
      private static const TIME_STR:String = "12月11日-12月17日 18:00-20:00";
      
      private static const AC:ActivityControl = new ActivityControl([new CronTimeVo("*","18-19","11-17","12","*","2015")]);
       
      
      public function IronCollectActivity()
      {
         super();
      }
      
      private static function get b() : Boolean
      {
         if(TasksManager.getTaskStatus(1913) == TasksManager.COMPLETE)
         {
            return true;
         }
         return false;
      }
      
      private static function get taskMC() : MovieClip
      {
         return _map.conLevel["taskmc"];
      }
      
      private static function get isInActive() : Boolean
      {
         return AC.isInActivityTime;
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         if(!b)
         {
            MainManager.selfVisible = false;
            startPro();
         }
         else
         {
            initNpc();
         }
         MapListenerManager.add(_map.conLevel["intro"],onShowPanel);
      }
      
      private static function initNpc() : void
      {
         taskMC.gotoAndStop(8);
         CommonUI.addYellowExcal(_map.topLevel,354,342);
         MapListenerManager.add(_map.conLevel["taskmc"],onClick);
         MapListenerManager.add(_map.conLevel["kameilong"],onClick,"卡梅隆");
      }
      
      private static function onShowPanel(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("IronCollectPanel"),"正在加载...","活动时间：" + TIME_STR);
      }
      
      private static function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if(isInActive)
         {
            switch(e.currentTarget.name)
            {
               case "taskmc":
                  NpcDialog.show(NPC.PIRATE,["哼哼，想要从我们身上拆下海盗铁皮，简直是痴人说梦。"],["我一定把你们拆得稀巴烂。","我先热热身。"],[function():void
                  {
                     FightManager.fightWithBoss("海盗");
                  }]);
                  break;
               case "kameilong":
                  SocketConnection.addCmdListener(CommandID.ITEM_LIST,function(param1:SocketEvent):void
                  {
                     var data:ByteArray;
                     var e:SocketEvent = param1;
                     SocketConnection.removeCmdListener(CommandID.ITEM_LIST,arguments.callee);
                     data = e.data as ByteArray;
                     if(data.readUnsignedInt() > 0)
                     {
                        SocketConnection.addCmdListener(CommandID.IRON_COLLECT_CUT,function(param1:SocketEvent):void
                        {
                           var data:ByteArray;
                           var id:uint = 0;
                           var e:SocketEvent = param1;
                           SocketConnection.removeCmdListener(CommandID.IRON_COLLECT_CUT,arguments.callee);
                           data = e.data as ByteArray;
                           id = data.readUnsignedInt();
                           if(id == 400404)
                           {
                              CommonUI.removeYellowExcal(_map.topLevel);
                              AnimateManager.playMcAnimate(taskMC,9,"mc",function():void
                              {
                                 CommonUI.addYellowExcal(_map.topLevel,354,342);
                                 taskMC.gotoAndStop(8);
                                 ItemInBagAlert.show(id,"一个卡梅隆精元已放入你的背包中",function():void
                                 {
                                    NpcDialog.show(NPC.PIRATE,["哈哈哈，我就不相信，你能把所有的精灵都救走。"],["哼，我不会半途而废的。"]);
                                 });
                              });
                           }
                           else
                           {
                              NpcDialog.show(NPC.PIRATE,["啊哈哈哈，你又不是艾里克大人，你锻造的剪刀怎么可能有效果，啊哈哈哈。"],["别得意，我不会放弃的！"]);
                           }
                        });
                        SocketConnection.send(CommandID.IRON_COLLECT_CUT);
                     }
                     else
                     {
                        NpcDialog.show(NPC.SEER,["我还没有超级大剪刀呢。还是先去跟海盗对战，收集齐0xFF00007个海盗铁皮0xFFFFFF，锻造成功0xFF0000超级大剪刀0xFFFFFF，再来解救精灵吧。"],null,null,false);
                     }
                  });
                  SocketConnection.send(CommandID.ITEM_LIST,1200289,1200289,2);
            }
         }
         else
         {
            NpcDialog.show(NPC.PIRATE,[TIME_STR + "，我们才会给你这个机会挑战我们。哼哼，想要从我们身上拆下海盗铁皮，简直是痴人说梦。"],["我一定把你们拆得稀巴烂。"]);
         }
      }
      
      private static function startPro() : void
      {
         AnimateManager.playMcAnimate(taskMC,1,"mc",function():void
         {
            NpcDialog.show(NPC.SEER,["我是赛尔机器人。你…你身上的铁链是怎么回事儿？谁会对精灵做这么残忍的事情？难道，又是海盗……"],null,null,false,function():void
            {
               AnimateManager.playMcAnimate(taskMC,2,"mc",function():void
               {
                  NpcDialog.show(NPC.PIRATE,["又是你？又来干扰我们伟大的精灵收集计划吗？哼哼，这次我们用铁链牢牢锁住了精灵，看你能奈我何~"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(taskMC,3,"mc",function():void
                     {
                        NpcDialog.show(NPC.PIRATE,["啊哈哈哈！你是不可能弄断这条铁链的，这可是伟大的海盗的伟大的发明~"],null,null,false,function():void
                        {
                           AnimateManager.playMcAnimate(taskMC,4,"mc",function():void
                           {
                              NpcDialog.show(NPC.AILIKE,["你们这几个蠢货！艾里克要吸收精灵的能量，但没说让你们虐待精灵！多么可爱多么水灵的小精灵，你们怎么忍心这样对待它！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.PIRATE,["艾…艾里克大人…我们就是遵照您的命令…我们……"],null,null,false,function():void
                                 {
                                    AnimateManager.playMcAnimate(taskMC,5,"mc",function():void
                                    {
                                       AnimateManager.playMcAnimate(taskMC,6,"mc",function():void
                                       {
                                          NpcDialog.show(NPC.AILIKE,["蠢货！你们抓了多少这样的精灵啊！那边那个铁皮机器人！"],["我？"],[function():void
                                          {
                                             NpcDialog.show(NPC.AILIKE,["艾里克日理万机，没有那么多精力，剩下的精灵就交给你了。"],["哎？好啊，把你的大剪刀给我。"],[function():void
                                             {
                                                NpcDialog.show(NPC.AILIKE,["艾里克从愚蠢的海盗身上拆下0xFF00007个铁皮0xFFFFFF，锻造了这把超级大剪刀，仅此一把。你把这些蠢货揍一顿，很快就能收集齐锻造材料了。艾里克要先走了。"],null,null,false,function():void
                                                {
                                                   AnimateManager.playMcAnimate(taskMC,7,"mc",function():void
                                                   {
                                                      NpcDialog.show(NPC.SEER,["……那我就从海盗身上拆几块铁皮下来吧。"],["（与海盗对战，收集海盗铁皮）"],[function():void
                                                      {
                                                         TasksManager.accept(1913,function():void
                                                         {
                                                            TasksManager.complete(1913,0,function():void
                                                            {
                                                               MainManager.selfVisible = true;
                                                               initNpc();
                                                            });
                                                         });
                                                      }]);
                                                   });
                                                });
                                             }]);
                                          }]);
                                       });
                                    });
                                 });
                              });
                           });
                        });
                     });
                  });
               });
            });
         });
      }
      
      public static function destroy() : void
      {
         if(_map)
         {
            DisplayUtil.removeForParent(taskMC);
            _map = null;
         }
      }
   }
}
