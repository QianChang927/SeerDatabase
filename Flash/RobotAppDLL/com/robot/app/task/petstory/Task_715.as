package com.robot.app.task.petstory
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.animate.CartoonManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   
   public class Task_715
   {
      
      private static const TASKID:uint = 715;
      
      private static var _instance:com.robot.app.task.petstory.Task_715;
       
      
      private var _map:BaseMapProcess;
      
      public function Task_715(param1:PrivateClass)
      {
         super();
      }
      
      public static function getInstance() : com.robot.app.task.petstory.Task_715
      {
         if(_instance == null)
         {
            _instance = new com.robot.app.task.petstory.Task_715(new PrivateClass());
         }
         return _instance;
      }
      
      public function init(param1:BaseMapProcess) : void
      {
         this._map = param1;
         if(MapManager.currentMap.id == 669)
         {
            (this._map.conLevel["task715MC"] as MovieClip).visible = false;
         }
         else if(MapManager.currentMap.id == 671)
         {
            (this._map.conLevel["seerMC"] as MovieClip).visible = false;
            (this._map.conLevel["steleMC"] as MovieClip).visible = false;
            (this._map.conLevel["stoneMC"] as MovieClip).visible = false;
            (this._map.conLevel["aiteMC"] as MovieClip).visible = false;
         }
         this.checkTask();
      }
      
      private function checkTask() : void
      {
         var _loc1_:uint = uint(TasksManager.getTaskStatus(TASKID));
         ToolBarController.showOrHideAllUser(false);
         if(_loc1_ == TasksManager.UN_ACCEPT)
         {
            OgreController.isShow = false;
            this.initProcess_1();
         }
         else if(_loc1_ == TasksManager.ALR_ACCEPT)
         {
            OgreController.isShow = false;
            TasksManager.getProStatusList(TASKID,this.getTaskStates);
         }
         else if(_loc1_ == TasksManager.COMPLETE)
         {
            OgreController.isShow = true;
            ToolBarController.showOrHideAllUser(true);
         }
      }
      
      private function getTaskStates(param1:Array) : void
      {
         if(!param1[0])
         {
            if(MapManager.currentMap.id == 669)
            {
               this.dialogSwitch(2);
            }
         }
         else if(Boolean(param1[0]) && !param1[1])
         {
            if(MapManager.currentMap.id == 671)
            {
               this.initProcess_3();
            }
            else if(MapManager.currentMap.id == 669)
            {
               (this._map.conLevel["task715MC"] as MovieClip).visible = true;
               (this._map.conLevel["task715MC"] as MovieClip).gotoAndStop(3);
            }
         }
         else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
         {
            if(MapManager.currentMap.id == 671)
            {
               this.initProcess_4();
            }
         }
         else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && !param1[3])
         {
            if(MapManager.currentMap.id == 671)
            {
               this.initProcess_5();
            }
         }
         else if(Boolean(param1[0]) && Boolean(param1[1]) && Boolean(param1[2]) && Boolean(param1[3]) && !param1[4])
         {
            if(MapManager.currentMap.id == 671)
            {
               this.initProcess_10();
            }
         }
      }
      
      private function initProcess_1() : void
      {
         if(MapManager.currentMap.id == 669)
         {
            (this._map.conLevel["task715MC"] as MovieClip).visible = true;
            (this._map.conLevel["task715MC"] as MovieClip).gotoAndStop(1);
            (this._map.conLevel["task715MC"] as MovieClip).buttonMode = true;
            (this._map.conLevel["task715MC"] as MovieClip).addEventListener(MouseEvent.CLICK,this.onMousePet);
         }
      }
      
      private function initProcess_2() : void
      {
         (this._map.conLevel["task715MC"] as MovieClip).visible = true;
         KTool.getFrameMc(this._map.conLevel["task715MC"] as MovieClip,2,"",function(param1:DisplayObject):void
         {
            var o:DisplayObject = param1;
            var mc:MovieClip = o as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               TasksManager.complete(TASKID,0,function(param1:Boolean):void
               {
                  if(param1)
                  {
                     (_map.conLevel["task715MC"] as MovieClip).gotoAndStop(3);
                  }
               });
            });
         });
      }
      
      private function initProcess_3() : void
      {
         (this._map.conLevel["seerMC"] as MovieClip).visible = true;
         (this._map.conLevel["steleMC"] as MovieClip).visible = true;
         (this._map.conLevel["stoneMC"] as MovieClip).visible = true;
         MainManager.actorModel.visible = false;
         MainManager.actorModel.hideNono();
         NpcDialog.show(NPC.SEER,["哇！这里就是异能冰窟？好冷啊！感觉身体的而每个部件都要结冰一样！"],["让我找找异能泉水在哪里！"],[function():void
         {
            KTool.getFrameMc(_map.conLevel["seerMC"] as MovieClip,1,"",function(param1:DisplayObject):void
            {
               var o:DisplayObject = param1;
               var mc:* = o as MovieClip;
               AnimateManager.playMcAnimate(mc,1,"",function():void
               {
                  (_map.conLevel["steleMC"] as MovieClip).gotoAndStop(2);
                  (_map.conLevel["seerMC"] as MovieClip).visible = false;
                  MainManager.actorModel.visible = true;
                  MainManager.actorModel.pos = new Point(100,424);
                  (_map.conLevel["stoneMC"] as MovieClip).buttonMode = true;
                  (_map.conLevel["stoneMC"] as MovieClip).gotoAndStop(2);
                  (_map.conLevel["stoneMC"] as MovieClip).addEventListener(MouseEvent.CLICK,onMouseStone);
                  dialogSwitch(3);
               });
            });
         }]);
      }
      
      private function initProcess_4() : void
      {
         (this._map.conLevel["aiteMC"] as MovieClip).visible = true;
         this.dialogSwitch(5);
      }
      
      private function initProcess_5() : void
      {
         (this._map.conLevel["aiteMC"] as MovieClip).visible = false;
         MainManager.actorModel.visible = false;
         KTool.playFullMovie(27,function():void
         {
            (_map.conLevel["seerMC"] as MovieClip).visible = true;
            (_map.conLevel["steleMC"] as MovieClip).visible = false;
            KTool.getFrameMc(_map.conLevel["seerMC"] as MovieClip,2,"",function(param1:DisplayObject):void
            {
               var _loc2_:MovieClip = param1 as MovieClip;
               _loc2_.gotoAndStop(1);
            });
            dialogSwitch(7);
         });
      }
      
      private function initProcess_6() : void
      {
         (this._map.conLevel["seerMC"] as MovieClip).visible = true;
         (this._map.conLevel["steleMC"] as MovieClip).visible = false;
         MainManager.actorModel.visible = false;
         MainManager.actorModel.hideNono();
         KTool.getFrameMc(this._map.conLevel["seerMC"] as MovieClip,2,"",function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var o:DisplayObject = param1;
            mc = o as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               mc.gotoAndStop(mc.totalFrames);
               dialogSwitch(9);
            });
         });
      }
      
      private function initProcess_7() : void
      {
         (this._map.conLevel["seerMC"] as MovieClip).visible = true;
         (this._map.conLevel["steleMC"] as MovieClip).visible = false;
         MainManager.actorModel.visible = false;
         MainManager.actorModel.hideNono();
         KTool.getFrameMc(this._map.conLevel["seerMC"] as MovieClip,3,"",function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var o:DisplayObject = param1;
            mc = o as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               mc.gotoAndStop(mc.totalFrames);
               dialogSwitch(10);
            });
         });
      }
      
      private function initProcess_8() : void
      {
         (this._map.conLevel["seerMC"] as MovieClip).visible = true;
         (this._map.conLevel["steleMC"] as MovieClip).visible = false;
         MainManager.actorModel.visible = false;
         MainManager.actorModel.hideNono();
         KTool.getFrameMc(this._map.conLevel["seerMC"] as MovieClip,4,"",function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var o:DisplayObject = param1;
            mc = o as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               mc.gotoAndStop(mc.totalFrames);
               dialogSwitch(11);
            });
         });
      }
      
      private function initProcess_9() : void
      {
         (this._map.conLevel["seerMC"] as MovieClip).visible = true;
         (this._map.conLevel["steleMC"] as MovieClip).visible = false;
         MainManager.actorModel.visible = false;
         MainManager.actorModel.hideNono();
         KTool.getFrameMc(this._map.conLevel["seerMC"] as MovieClip,5,"",function(param1:DisplayObject):void
         {
            var mc:MovieClip = null;
            var o:DisplayObject = param1;
            mc = o as MovieClip;
            AnimateManager.playMcAnimate(mc,1,"",function():void
            {
               mc.gotoAndStop(mc.totalFrames);
               dialogSwitch(12);
            });
         });
      }
      
      private function initProcess_10() : void
      {
         MainManager.actorModel.visible = false;
         KTool.playFullMovie(25,function():void
         {
            (_map.conLevel["seerMC"] as MovieClip).visible = true;
            (_map.conLevel["steleMC"] as MovieClip).visible = false;
            KTool.getFrameMc(_map.conLevel["seerMC"] as MovieClip,2,"",function(param1:DisplayObject):void
            {
               var _loc2_:MovieClip = param1 as MovieClip;
               _loc2_.gotoAndStop(1);
            });
            dialogSwitch(8);
         });
      }
      
      private function onMousePet(param1:MouseEvent) : void
      {
         this.dialogSwitch(1);
      }
      
      private function onMouseStone(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         (this._map.conLevel["seerMC"] as MovieClip).visible = false;
         (this._map.conLevel["stoneMC"] as MovieClip).visible = false;
         KTool.playFullMovie(24,function():void
         {
            (_map.conLevel["aiteMC"] as MovieClip).visible = true;
            dialogSwitch(4);
         });
      }
      
      public function dialogSwitch(param1:uint) : void
      {
         var id:uint = param1;
         switch(id)
         {
            case 1:
               NpcDialog.show(NPC.DADILA,["呜呜呜….出现了，我能感受到这股能量，一定是它要出现了！！！"],["咦！达迪拉你怎么了？","它在胡说八道什么啊！"],[function():void
               {
                  TasksManager.accept(TASKID,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        (_map.conLevel["task715MC"] as MovieClip).removeEventListener(MouseEvent.CLICK,onMousePet);
                        (_map.conLevel["task715MC"] as MovieClip).buttonMode = false;
                        dialogSwitch(2);
                     }
                  });
               }]);
               break;
            case 2:
               NpcDialog.show(NPC.DADILA,["传说中最强的异能王马上就要现身了！就在异能冰窟一个叫做异能泉水的地方！我先走了！"],["传说的异能王！！！那我一定要去看看啊！"],[function():void
               {
                  NpcDialog.show(NPC.DADILA,["小赛尔，小心为妙啊！我都不敢靠近这股冰窟！"],["没关系，我一个人去就可以了！"],[function():void
                  {
                     initProcess_2();
                  }]);
               }]);
               break;
            case 3:
               NpcDialog.show(NPC.SEER,["咦！这块神奇的石碑是什么，还是先看看吧！"],["点击附近的石块！"]);
               break;
            case 4:
               NpcDialog.show(NPC.AISITE,["好险！还好你没有碰到异能石，否则就要出大事了！你难道也是海盗？"],["不不不！我不是海盗！"],[function():void
               {
                  TasksManager.complete(TASKID,1,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        initProcess_4();
                     }
                  });
               }]);
               break;
            case 5:
               NpcDialog.show(NPC.AISITE,["那就好！对了，千万不要靠近异能石，否则就会像我刚刚一样，失去控制的！"],["异能石和异能王又什么联系吗？"],[function():void
               {
                  NpcDialog.show(NPC.AISITE,["想必你一定知道异能王的传说了吧！它就是一个“怪物”不过我也是听说哦！"],["能说的详细点吗？我很想知道发生了什么！"],[function():void
                  {
                     CartoonManager.play(ClientConfig.getFullMovie("cartoon/task715_1"),function():void
                     {
                        dialogSwitch(6);
                     });
                  }]);
               }]);
               break;
            case 6:
               NpcDialog.show(NPC.AISITE,["事情就是这样的，所以千万不要靠近异能石，一旦释放这股可怕的力量后果将无法想象！"],["哇！原来传说是真的！"],[function():void
               {
                  NpcDialog.show(NPC.AISITE,["是啊！还好现在海盗还未发现这个秘密，我们艾斯特一族就是这里的守护者，避免这样的事情不会在我们这个时代发生！"],null,null,false,function():void
                  {
                     TasksManager.complete(TASKID,2,function(param1:Boolean):void
                     {
                        if(param1)
                        {
                           initProcess_5();
                        }
                     });
                  });
               }]);
               break;
            case 7:
               NpcDialog.show(NPC.SEER,["额….我这是怎么了，感觉好难受啊！这股能量好强大啊！"],["赛尔….赛尔！！！！"],[function():void
               {
                  TasksManager.complete(TASKID,3,function(param1:Boolean):void
                  {
                     if(param1)
                     {
                        initProcess_10();
                     }
                  });
               }]);
               break;
            case 8:
               NpcDialog.show(NPC.SEER,["啊！是你啊！暗黑！你怎么来了！你有看到四个黑色的黑影吗？"],["没有啊！我什么都没有看到！"],[function():void
               {
                  NpcDialog.show(NPC.SEER,["不可能啊！我听到他们在谈话之间还提到你呢？你老实说你是不是和他们是一伙的！你为什么要骗我！"],["不会的，你放心吧！"],[function():void
                  {
                     NpcDialog.show(NPC.ANHEI_SEER,["哎….先不说这些了，我还是先把你扶起来吧！"],["不用你扶，我自己会起来的！你快回答我！"],[function():void
                     {
                        initProcess_6();
                     }]);
                  }]);
               }]);
               break;
            case 9:
               NpcDialog.show(NPC.SEER,["暗黑，你之前真的没有发现什么不对劲的事情吗？异能石怎么会不见了呢？难道是之前的四个家伙搞的鬼？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ANHEI_SEER,["放心吧！赛尔，这件事情就交给我了，我会帮你查清楚是谁干的！你就在这里等待我的好消息吧！"],["恩，好吧！也只能这样了！"],[function():void
                  {
                     initProcess_7();
                  }]);
               });
               break;
            case 10:
               NpcDialog.show(NPC.SEER,["暗黑希望你能早日查到线索!对了，我该去看看艾斯特怎么样了！"],["看样子它伤的不轻啊！"],[function():void
               {
                  initProcess_8();
               }]);
               break;
            case 11:
               NpcDialog.show(NPC.SEER,["艾斯特，你醒醒啊！你没事吧！"],["……"],[function():void
               {
                  initProcess_9();
               }]);
               break;
            case 12:
               NpcDialog.show(NPC.SEER,["艾斯特，你终于醒了，不过，告诉你个不幸的消息，异能石不见了！"],["什么！怎么会这样！"],[function():void
               {
                  NpcDialog.show(NPC.AISITE,["完了，不知道是谁拿走了，希望不要被那些邪恶势力获得，否则裂空星系就要大难临头了！"],["放心吧！我已经让我的朋友去查这件事了！"],[function():void
                  {
                     NpcDialog.show(NPC.AISITE,["你的朋友？？难道是那个暗黑啊！我感觉这件事情一定和他有关！不过希望你能帮助我把异能石找回来!"],["恩，放心吧！这件事情我会负责到底的！"],[function():void
                     {
                        KTool.playFullMovie(26,function():void
                        {
                           TasksManager.complete(TASKID,4,function(param1:Boolean):void
                           {
                              if(param1)
                              {
                                 (_map.conLevel["seerMC"] as MovieClip).visible = false;
                                 MainManager.actorModel.visible = true;
                                 MainManager.actorModel.pos = new Point(578,374);
                                 ToolBarController.showOrHideAllUser(true);
                                 OgreController.isShow = true;
                              }
                           });
                        });
                     }]);
                  }]);
               }]);
         }
      }
      
      public function destroy() : void
      {
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
