package com.robot.app.task.taskscollection
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PanelRecallManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.debug.DebugTrace;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task1195
   {
      
      private static const TASK_ID:uint = 1765;
      
      private static var _map:BaseMapProcess;
      
      public static var moneyBuyBinghun:Boolean;
       
      
      public function Task1195()
      {
         super();
      }
      
      public static function initTaskForMap40(param1:BaseMapProcess) : void
      {
         _map = param1;
         (_map.conLevel["task1195MC"] as MovieClip).gotoAndStop(1);
         if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.UN_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(false);
            OgreController.isShow = false;
            (_map.conLevel["task1195MC"] as MovieClip).gotoAndStop(2);
            ToolTipManager.add(_map.conLevel["link"] as MovieClip,"林克");
            (_map.conLevel["link"] as MovieClip).buttonMode = true;
            (_map.conLevel["link"] as MovieClip).addEventListener(MouseEvent.CLICK,onAccept);
            ToolBarController.showOrHideAllUser(true);
            OgreController.isShow = true;
         }
         else if(TasksManager.getTaskStatus(TASK_ID) == TasksManager.ALR_ACCEPT)
         {
            ToolBarController.showOrHideAllUser(false);
            OgreController.isShow = false;
            startPro_0();
         }
         else
         {
            ToolBarController.showOrHideAllUser(true);
            OgreController.isShow = true;
            DisplayUtil.removeForParent(_map.conLevel["task1195MC"]);
            (_map.conLevel["link"] as MovieClip).buttonMode = false;
            (_map.conLevel["link"] as MovieClip).removeEventListener(MouseEvent.CLICK,onAccept);
            DisplayUtil.removeForParent(_map.conLevel["link"]);
         }
      }
      
      public static function destory() : void
      {
         ToolBarController.showOrHideAllUser(true);
         OgreController.isShow = true;
         _map = null;
      }
      
      private static function onAccept(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         ToolBarController.showOrHideAllUser(false);
         OgreController.isShow = false;
         (_map.conLevel["link"] as MovieClip).buttonMode = false;
         (_map.conLevel["link"] as MovieClip).removeEventListener(MouseEvent.CLICK,onAccept);
         DisplayUtil.removeForParent(_map.conLevel["link"]);
         (_map.conLevel["task1195MC"] as MovieClip).gotoAndStop(3);
         TasksManager.accept(TASK_ID,function(param1:Boolean):void
         {
            if(param1)
            {
               startPro_0();
            }
         });
      }
      
      private static function startPro_0() : void
      {
         (_map.conLevel["akxyMc"] as MovieClip).visible = false;
         (_map.conLevel["akxyMc1"] as MovieClip).visible = false;
         AnimateManager.playMcAnimate(_map.conLevel["task1195MC"],3,"mc3",function():void
         {
            NpcDialog.show(NPC.SEER,["三年前的决战？！它们之间难道有不为人知的故事？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.AKXY,["三年前宇宙中刚出现塞西利亚星，这片冰晶之地被一只野心勃勃的冰系精灵霸占！为了解救苍生，我向它发起了挑战！"],["结果如何？"],[function():void
               {
                  AnimateManager.playMcAnimate(_map.conLevel["task1195MC"],4,"mc4",function():void
                  {
                     NpcDialog.show(NPC.SEER,["看似文静的林克会拥有如此强大的冰系力量！真是精灵不可貌相！"],["阿克希亚，最后谁赢了？"],[function():void
                     {
                        NpcDialog.show(NPC.BULINKESI,["给我住嘴，别再说了！如果不是你找里奥斯帮忙，我会输吗？"],["又关里奥斯的事？"],[function():void
                        {
                           AnimateManager.playMcAnimate(_map.conLevel["task1195MC"],5,"mc5",function():void
                           {
                              NpcDialog.show(NPC.LIEBINGZHIHUN,["三年来我不断地提升自己、超越自己！目的只有一个，就是再和你大战三百回合！"],["我就如你所愿！"],[function():void
                              {
                                 AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("active20120824_5"),function():void
                                 {
                                    NpcDialog.show(NPC.LINKE,["三年的修炼成果瞬间化为乌有！我将离开这片故乡，请你们记住我！"],["林克！大家都很喜欢你！"],[function():void
                                    {
                                       NpcDialog.show(NPC.LINKE,["我是一个失败者！塞西利亚星的罪人！"],["在我们心中你永远是那个可爱的林克！"],[function():void
                                       {
                                          AnimateManager.playMcAnimate(_map.conLevel["task1195MC"],6,"mc6",function():void
                                          {
                                             NpcDialog.show(NPC.AKXY,["冰魂拥有深不可测的实力！使用冰魄之力就可以让0xff0000稀有精灵-林克0xffffff超进化！小赛尔，想拥有新一代冰系之王吗？赶紧行动起来吧！"],["OK！冰系之王！我要定了！"],[function():void
                                             {
                                                TasksManager.complete(TASK_ID,2,function(param1:Boolean):void
                                                {
                                                   if(param1)
                                                   {
                                                      DebugTrace.show("1195--任务完成！");
                                                      SocketConnection.send(1022,86049600);
                                                   }
                                                   ToolBarController.showOrHideAllUser(true);
                                                   OgreController.isShow = true;
                                                   DisplayUtil.removeForParent(_map.conLevel["task1195MC"]);
                                                   DisplayUtil.removeForParent(_map.conLevel["link"]);
                                                   (_map.conLevel["akxyMc"] as MovieClip).visible = true;
                                                   (_map.conLevel["akxyMc1"] as MovieClip).visible = true;
                                                   PanelRecallManager.TuoLukePanel_Recall = false;
                                                   ModuleManager.showModule(ClientConfig.getAppModule("linkEnvolution/LinkEnvolutionWarehouse"),"正在打开面板……");
                                                });
                                             }]);
                                          });
                                       }]);
                                    }]);
                                 });
                              }]);
                           });
                        }]);
                     }]);
                  });
               }]);
            });
         });
      }
   }
}
