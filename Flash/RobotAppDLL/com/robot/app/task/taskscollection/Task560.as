package com.robot.app.task.taskscollection
{
   import com.robot.app.task.control.TaskController_560;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MCLoadEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.newloader.MCLoader;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.media.Sound;
   import flash.media.SoundChannel;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class Task560
   {
      
      private static var _map:BaseMapProcess;
      
      private static var xuanMc:MovieClip;
      
      private static var leiyiAppear_mc:MovieClip;
      
      private static var leiyiDisappear_mc:MovieClip;
      
      private static var door_mc:MovieClip;
      
      private static var openDoor_mc:MovieClip;
      
      private static var ManHuaMC:MovieClip;
      
      private static var BingDiaoMC:MovieClip;
      
      private static var HeiBaiMC:MovieClip;
      
      private static var JackBattleMC:MovieClip;
      
      private static var Jack_MC:MovieClip;
      
      private static var snowMC:MovieClip;
      
      private static var guide_mc:MovieClip;
      
      private static var hasIndoor:Boolean = false;
      
      private static var doorMc:MovieClip;
      
      private static var leiyiAppearSound:Sound;
      
      private static var leiyiAppearChannel:SoundChannel;
       
      
      public function Task560()
      {
         super();
      }
      
      public static function initTask() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_560_0"),function():void
         {
            NpcDialog.show(NPC.IRIS,["黑色旋涡、时空入口、黑白精灵……我都快要搞不清楚了！我想只有前往那里，才可以找到真正的答案！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.IRIS,["哦对了！你所说的那个黑色精灵所散发出来的物质，经过派特化验，它绝对不是单纯的精灵……你一定要加倍小心！"],["向菲尔纳星球起航！"],[function():void
               {
                  MapManager.changeMap(459);
               }]);
            });
         });
      }
      
      public static function initTask_459(param1:BaseMapProcess) : void
      {
         xuanMc = param1.conLevel["xuanMc"];
         var _loc2_:uint = uint(TasksManager.getTaskStatus(560));
         if(_loc2_ == TasksManager.ALR_ACCEPT)
         {
            ToolTipManager.add(xuanMc,"赫鲁卡星");
            xuanMc.gotoAndStop(1);
            xuanMc.buttonMode = true;
            xuanMc.addEventListener(MouseEvent.CLICK,onXuanMcClick);
         }
      }
      
      private static function onXuanMcClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         xuanMc.removeEventListener(MouseEvent.CLICK,onXuanMcClick);
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_559_0"),function():void
         {
            MapManager.changeMap(460);
         });
      }
      
      public static function initTask_460(param1:BaseMapProcess) : void
      {
         var status:uint;
         var map:BaseMapProcess = param1;
         _map = map;
         leiyiAppear_mc = _map.animatorLevel["leiyiAppear_mc"];
         leiyiDisappear_mc = _map.animatorLevel["leiyiDisappear_mc"];
         door_mc = _map.animatorLevel["door_mc"];
         doorMc = map.conLevel["doorMc"];
         openDoor_mc = _map.animatorLevel["openDoor_mc"];
         BingDiaoMC = _map.animatorLevel["BingDiaoMC"];
         JackBattleMC = _map.animatorLevel["JackBattleMC"];
         guide_mc = _map.animatorLevel["guide_mc"];
         guide_mc.visible = false;
         leiyiAppear_mc.gotoAndStop(1);
         status = uint(TasksManager.getTaskStatus(560));
         if(status == TasksManager.UN_ACCEPT)
         {
            DisplayUtil.removeForParent(leiyiAppear_mc);
            DisplayUtil.removeForParent(leiyiDisappear_mc);
            DisplayUtil.removeForParent(door_mc);
            DisplayUtil.removeForParent(BingDiaoMC);
            DisplayUtil.removeForParent(JackBattleMC);
         }
         else if(status == TasksManager.ALR_ACCEPT)
         {
            leiyiAppear_mc.visible = false;
            leiyiDisappear_mc.visible = false;
            door_mc.visible = false;
            BingDiaoMC.visible = false;
            JackBattleMC.visible = false;
            TasksManager.getProStatusList(TaskController_560.TASK_ID,function(param1:Array):void
            {
               if(!param1[0])
               {
                  startProOne();
               }
               else if(Boolean(param1[0]) && !param1[1])
               {
                  openDoor_mc.visible = true;
                  if(hasIndoor)
                  {
                     startProTwo();
                  }
               }
               else if(Boolean(param1[0]) && Boolean(param1[1]) && !param1[2])
               {
                  openDoor_mc.visible = true;
                  startProThree();
               }
            });
         }
         else if(status == TasksManager.COMPLETE)
         {
            DisplayUtil.removeForParent(leiyiAppear_mc);
            DisplayUtil.removeForParent(leiyiDisappear_mc);
            DisplayUtil.removeForParent(BingDiaoMC);
            DisplayUtil.removeForParent(JackBattleMC);
            DisplayUtil.removeForParent(door_mc);
            openDoor_mc.visible = true;
         }
      }
      
      public static function EnterDoor() : void
      {
         var status:uint;
         hasIndoor = true;
         if(guide_mc)
         {
            guide_mc.visible = false;
         }
         status = uint(TasksManager.getTaskStatus(560));
         if(status == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(TaskController_560.TASK_ID,function(param1:Array):void
            {
               if(Boolean(param1[0]) && !param1[1])
               {
                  startProTwo();
               }
            });
         }
      }
      
      public static function OutDoor() : void
      {
         hasIndoor = false;
      }
      
      private static function snowLoad(param1:MCLoadEvent) : void
      {
         snowMC = param1.getContent() as MovieClip;
         LevelManager.appLevel.addChild(snowMC);
      }
      
      private static function onClickXuanHandler(param1:MouseEvent) : void
      {
         MapManager.changeMap(460);
      }
      
      private static function startProOne() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_559_0"),function():void
         {
            NpcDialog.show(NPC.SEER,["哎哟……我的屁股……好疼……好讨厌的感觉啊！"],["哇哇哇！旁边有动静！！！"],[function():void
            {
               leiyiAppear_mc.visible = true;
               leiyiAppearSound = MapManager.currentMap.libManager.getSound("leiyiAppear");
               leiyiAppearChannel = leiyiAppearSound.play();
               doorMc.mouseChildren = false;
               doorMc.mouseEnabled = false;
               AnimateManager.playMcAnimate(leiyiAppear_mc,0,"",function():void
               {
                  leiyiAppear_mc.stop();
                  NpcDialog.show(NPC.LEIYI,["我的朋友，你是来拯救赫鲁卡星的吗？咤克斯的封印已经解除了……我不知道还有多少精灵会因此而受伤"],["……雷……雷伊？"],[function():void
                  {
                     NpcDialog.show(NPC.LEIYI,["在这里，我无法现身更无法保护赫尔卡星人！我希望你可以帮助我守护这里……"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.LEIYI,["守护我的人民！接下来你所看到的就是几千万年以前发生在这里的事情！咤克斯……可怕的噩梦！"],null,null,false,function():void
                        {
                           AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_560_5"),function():void
                           {
                              NpcDialog.show(NPC.LEIYI,["你所要做的就是去解开阿哆拉和特尼的诅咒，只有他们的帮助下，我们才有可能镇压咤克斯…"],["你是平行世界里的雷伊吗？"],[function():void
                              {
                                 leiyiAppear_mc.visible = false;
                                 leiyiDisappear_mc.visible = true;
                                 AnimateManager.playMcAnimate(leiyiDisappear_mc,0,"",function():void
                                 {
                                    door_mc.visible = true;
                                    AnimateManager.playMcAnimate(door_mc,0,"",function():void
                                    {
                                       door_mc.stop();
                                       openDoor_mc.visible = true;
                                       doorMc.mouseEnabled = true;
                                       guide_mc.visible = true;
                                       TasksManager.complete(TaskController_560.TASK_ID,0,function(param1:Boolean):void
                                       {
                                          if(param1)
                                          {
                                             if(hasIndoor)
                                             {
                                                startProTwo();
                                             }
                                          }
                                       });
                                    });
                                 });
                              }]);
                           });
                        });
                     });
                  }]);
               });
            }]);
         });
      }
      
      private static function startProTwo() : void
      {
         BingDiaoMC.visible = true;
         MainManager.actorModel.visible = false;
         MainManager.actorModel.hidePet();
         AnimateManager.playMcAnimate(BingDiaoMC,0,"",function():void
         {
            NpcDialog.show(NPC.ZHANG_LAO,["谁……是谁？为什么你的到来让冰封多年的赫鲁卡星神兽有了动静？你难道就是预言中的救世主？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.ZHANG_LAO,["咤克斯的封印就是你解开的吧！这或许就是天意……赫鲁卡星需要你……拜托！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ZHANG_LAO,["自由飞行在天空中的阿哆拉需要飞行能量的元素，爱好战斗的特尼只有战斗的频率才能让它感受到心跳！准备好了吗？"],["伴随着他们自由在天空翱翔吧……"],[function():void
                  {
                     AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_560_1"),function():void
                     {
                        BingDiaoMC.visible = false;
                        JackBattleMC.visible = true;
                        AnimateManager.playMcAnimate(JackBattleMC,0,"",function():void
                        {
                           NpcDialog.show(NPC.KRIS_PET,["救世主，你愿意率领我们一起战斗吗？"],["上"],[function():void
                           {
                              TasksManager.complete(TaskController_560.TASK_ID,1,function(param1:Boolean):void
                              {
                                 if(param1)
                                 {
                                    startProThree();
                                 }
                              });
                           }]);
                        });
                     });
                  }]);
               });
            });
         });
      }
      
      private static function startProThree() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_560_4"),function():void
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_560_6"),function():void
            {
               var url:String;
               var mcLoader:MCLoader;
               JackBattleMC.visible = false;
               url = String(ClientConfig.getFullMovie("task_560_2"));
               mcLoader = new MCLoader(url,LevelManager.appLevel,1,"正在加载中...");
               mcLoader.addEventListener(MCLoadEvent.SUCCESS,snowLoad);
               mcLoader.doLoad();
               AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_560_3"),function():void
               {
                  NpcDialog.show(NPC.ZHANG_LAO,["星球的能量也在衰退，我想这次可能是最后一个神圣仪式了……"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.ZHANG_LAO,["我们会在这里等你回来，最后一次的神圣祭奠希望会有你，我们的救世主"],["我先回赛尔号禀报一下这里的情况！我一定会回来！"],[function():void
                     {
                        TasksManager.complete(TaskController_560.TASK_ID,2,function(param1:Boolean):void
                        {
                           if(param1)
                           {
                              MapManager.changeMap(9);
                           }
                        });
                     }]);
                  });
               });
            });
         });
      }
      
      public static function destory() : void
      {
         MainManager.actorModel.visible = true;
         if(MainManager.actorModel.pet)
         {
            MainManager.actorModel.showPet(MainManager.actorModel.pet.info);
         }
         if(leiyiAppearChannel)
         {
            leiyiAppearChannel.stop();
            leiyiAppearChannel = null;
         }
         if(Boolean(xuanMc) && MapManager.currentMap.id == 459)
         {
            ToolTipManager.remove(xuanMc);
            xuanMc.removeEventListener(MouseEvent.CLICK,onXuanMcClick);
         }
         DisplayUtil.removeForParent(leiyiAppear_mc);
         DisplayUtil.removeForParent(leiyiDisappear_mc);
         DisplayUtil.removeForParent(door_mc);
         DisplayUtil.removeForParent(BingDiaoMC);
         DisplayUtil.removeForParent(JackBattleMC);
         DisplayUtil.removeForParent(openDoor_mc);
      }
   }
}
