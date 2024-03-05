package com.robot.app.mapProcess.control
{
   import com.robot.app.mapProcess.control.activityControl.ActivityControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import com.robot.core.utils.CronTimeVo;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class AdventureInPirateCampsController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _canReceive:Boolean;
      
      private static const _dateStr:String = "11月20日-11月26日每天18:00-20:00";
       
      
      public function AdventureInPirateCampsController()
      {
         super();
      }
      
      public static function setup(param1:BaseMapProcess) : void
      {
         _map = param1;
         ToolTipManager.add(_map.conLevel["stone"] as MovieClip,"公告牌");
         (_map.conLevel["stone"] as MovieClip).visible = true;
         (_map.conLevel["stone"] as MovieClip).buttonMode = true;
         (_map.conLevel["stone"] as MovieClip).addEventListener(MouseEvent.CLICK,onStoneClick);
         _canReceive = true;
         onActivityTime(null);
         SocketConnection.addCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
      }
      
      private static function onActivityTime(param1:SocketEvent = null) : void
      {
         var _loc2_:ActivityControl = null;
         if(_canReceive)
         {
            _loc2_ = new ActivityControl([new CronTimeVo("*","18-19","20-26","11","*","2015")]);
            if(_loc2_.isInActivityTime)
            {
               initInsideTime();
            }
            else
            {
               initOutsideTime();
            }
         }
      }
      
      private static function initOutsideTime() : void
      {
         removeActivity();
         BitBuffSetClass.getBitSet([22431],function(param1:Array):void
         {
            if(!param1[0])
            {
               ToolTipManager.add(_map.conLevel["fuliyier"] as MovieClip,"芙莉依儿");
               CommonUI.addYellowExcal(_map.conLevel["fuliyier"],0,0);
               (_map.conLevel["fuliyier"] as MovieClip).visible = true;
               (_map.conLevel["fuliyier"] as MovieClip).buttonMode = true;
               (_map.conLevel["fuliyier"] as MovieClip).addEventListener(MouseEvent.CLICK,onFuliyierClick);
            }
            else
            {
               (_map.animatorLevel["adventureMC"] as MovieClip).visible = true;
               (_map.animatorLevel["adventureMC"] as MovieClip).gotoAndStop(6);
               ToolTipManager.add(_map.conLevel["ward"] as MovieClip,"囚禁室");
               (_map.conLevel["ward"] as MovieClip).visible = true;
               (_map.conLevel["ward"] as MovieClip).buttonMode = true;
               (_map.conLevel["ward"] as MovieClip).addEventListener(MouseEvent.CLICK,onWardClick);
            }
         });
      }
      
      private static function onFuliyierClick(param1:MouseEvent) : void
      {
         if(!BufferRecordManager.getState(MainManager.actorInfo,1035))
         {
            startPro();
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("AdventureInPirateCamps_InfoPanel"),"正在打开面板……");
         }
      }
      
      private static function startPro() : void
      {
         ToolTipManager.remove(_map.conLevel["fuliyier"] as MovieClip);
         CommonUI.removeYellowExcal(_map.conLevel["fuliyier"]);
         (_map.conLevel["fuliyier"] as MovieClip).visible = false;
         (_map.conLevel["fuliyier"] as MovieClip).buttonMode = false;
         (_map.conLevel["fuliyier"] as MovieClip).removeEventListener(MouseEvent.CLICK,onFuliyierClick);
         _canReceive = false;
         (_map.animatorLevel["adventureMC"] as MovieClip).visible = true;
         (_map.animatorLevel["adventureMC"] as MovieClip).gotoAndStop(1);
         MainManager.selfVisible = false;
         AnimateManager.playMcAnimate(_map.animatorLevel["adventureMC"],1,"mc1",function():void
         {
            NpcDialog.show(NPC.ALLISON,["尤米娜！你这些手下太没用了！屡战屡败！长赛尔志气，灭海盗威风！"],["……"],[function():void
            {
               NpcDialog.show(NPC.YUMINA,["我们的确没用，比不得您和佐格大人，百战不败，从来也没在赛小息手下吃过亏！"],["哈哈哈"],[function():void
               {
                  NpcDialog.show(NPC.ZOG,["过奖！过奖！"],["笨蛋！"],[function():void
                  {
                     NpcDialog.show(NPC.ALLISON,["笨蛋！她是在讽刺咱们呢！尤米娜！你别忘了米娜村还在咱海盗的控制下！你要敢反抗，就夷为平地！"],["你！卑鄙！"],[function():void
                     {
                        AnimateManager.playMcAnimate(_map.animatorLevel["adventureMC"],2,"mc2",function():void
                        {
                           NpcDialog.show(NPC.ALLISON,["喂！你，你别乱来!"],["尤米娜，你冷静一点。"],[function():void
                           {
                              NpcDialog.show(NPC.FULIYIER,["我们愿意接受惩罚，你不要对村子乱来！"],null,null,false,function():void
                              {
                                 AnimateManager.playMcAnimate(_map.animatorLevel["adventureMC"],3,"mc3",function():void
                                 {
                                    NpcDialog.show(NPC.YUMINA,["委屈你们了！"],["没事"],[function():void
                                    {
                                       NpcDialog.show(NPC.FULALUOER,["我们巾帼四魔花跟随你的那天就准备好了！"],null,null,false,function():void
                                       {
                                          NpcDialog.show(NPC.FULANXIER,["一切都是为了村子！"],null,null,false,function():void
                                          {
                                             NpcDialog.show(NPC.FULIYIER,["大局为重！不用担心我们！"],["谢谢你们，姐妹们！"],[function():void
                                             {
                                                AnimateManager.playMcAnimate(_map.animatorLevel["adventureMC"],4,"mc4",function():void
                                                {
                                                   NpcDialog.show(NPC.YUMINA,["你听见我说的话了吗？她们已不是我的手下了，所以不管是谁救了她们，就是她们新的主人！"],["啊？尤米娜，你这是？"],[function():void
                                                   {
                                                      NpcDialog.show(NPC.FULIYIER,["打败道尔、道格就可以收集开启监狱之门的密钥碎片，0xff0000" + _dateStr + "0xffffff就可以用密钥碎片打开电子锁！"],["我知道了"],[function():void
                                                      {
                                                         AnimateManager.playMcAnimate(_map.animatorLevel["adventureMC"],5,"mc5",function():void
                                                         {
                                                            SocketConnection.send(1020,323);
                                                            BitBuffSetClass.setBitSet([22431],[1]);
                                                            MainManager.selfVisible = true;
                                                            _canReceive = true;
                                                            (_map.animatorLevel["adventureMC"] as MovieClip).visible = true;
                                                            (_map.animatorLevel["adventureMC"] as MovieClip).gotoAndStop(6);
                                                            ToolTipManager.add(_map.conLevel["ward"] as MovieClip,"囚禁室");
                                                            (_map.conLevel["ward"] as MovieClip).visible = true;
                                                            (_map.conLevel["ward"] as MovieClip).buttonMode = true;
                                                            (_map.conLevel["ward"] as MovieClip).addEventListener(MouseEvent.CLICK,onWardClick);
                                                         });
                                                      }]);
                                                   }]);
                                                });
                                             }]);
                                          });
                                       });
                                    }]);
                                 });
                              });
                           }]);
                        });
                     }]);
                  }]);
               }]);
            }]);
         });
      }
      
      private static function initInsideTime() : void
      {
         removeActivity();
         (_map.animatorLevel["adventureMC"] as MovieClip).visible = true;
         (_map.animatorLevel["adventureMC"] as MovieClip).gotoAndStop(6);
         CommonUI.addYellowArrow(_map.conLevel["stone"],50,0);
         ToolTipManager.add(_map.conLevel["ward"] as MovieClip,"囚禁室");
         (_map.conLevel["ward"] as MovieClip).visible = true;
         (_map.conLevel["ward"] as MovieClip).buttonMode = true;
         (_map.conLevel["ward"] as MovieClip).addEventListener(MouseEvent.CLICK,onWardClick);
      }
      
      private static function onWardClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("AdventureInPirateCamps_InfoPanel"),"正在打开面板……");
      }
      
      private static function onStoneClick(param1:MouseEvent) : void
      {
         SocketConnection.send(1020,322);
         ModuleManager.showModule(ClientConfig.getAppModule("AdventureInPirateCamps_CrackPanel"),"正在打开面板……");
      }
      
      private static function removeActivity() : void
      {
         CommonUI.removeYellowArrow(_map.conLevel["stone"]);
         ToolTipManager.remove(_map.conLevel["ward"] as MovieClip);
         (_map.conLevel["ward"] as MovieClip).visible = false;
         (_map.conLevel["ward"] as MovieClip).buttonMode = false;
         (_map.conLevel["ward"] as MovieClip).removeEventListener(MouseEvent.CLICK,onWardClick);
         ToolTipManager.remove(_map.conLevel["fuliyier"] as MovieClip);
         CommonUI.removeYellowExcal(_map.conLevel["fuliyier"]);
         (_map.conLevel["fuliyier"] as MovieClip).visible = false;
         (_map.conLevel["fuliyier"] as MovieClip).buttonMode = false;
         (_map.conLevel["fuliyier"] as MovieClip).removeEventListener(MouseEvent.CLICK,onFuliyierClick);
      }
      
      public static function playSuccessCrackMC() : void
      {
         if(!_map)
         {
            return;
         }
         _canReceive = false;
         (_map.animatorLevel["adventureMC"] as MovieClip).visible = true;
         (_map.animatorLevel["adventureMC"] as MovieClip).gotoAndStop(6);
         MainManager.selfVisible = false;
         AnimateManager.playMcAnimate(_map.animatorLevel["adventureMC"],7,"mc7",function():void
         {
            NpcDialog.show(NPC.ZOG,["咦？好像少了几个手下！"],null,null,false,function():void
            {
               NpcDialog.show(NPC.ALLISON,["不会偷懒去了吧！可不能大意给赛尔混进来！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.ZOG,["集中营固若金汤，没事的！"],null,null,false,function():void
                  {
                     AnimateManager.playMcAnimate(_map.animatorLevel["adventureMC"],8,"mc8",function():void
                     {
                        NpcDialog.show(NPC.FULIYIER,["他们走了！赛尔加油！"],["好的"],[function():void
                        {
                           MainManager.selfVisible = true;
                           _canReceive = true;
                           (_map.animatorLevel["adventureMC"] as MovieClip).visible = true;
                           (_map.animatorLevel["adventureMC"] as MovieClip).gotoAndStop(6);
                        }]);
                     });
                  });
               });
            });
         });
      }
      
      public static function destroy() : void
      {
         _map = null;
         SocketConnection.removeCmdListener(CommandID.SYSTEM_TIME,onActivityTime);
      }
   }
}
