package com.robot.app.mapProcess
{
   import com.robot.app.sptGalaxy.BaiHuController;
   import com.robot.app.sptGalaxy.QingLongController;
   import com.robot.app.sptGalaxy.XuanWuController;
   import com.robot.app.sptGalaxy.ZhuQueController;
   import com.robot.app.task.taskscollection.Task816;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ToolTipManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_666 extends BaseMapProcess
   {
       
      
      private var _fun:Array;
      
      private var _stoneName:Array;
      
      private var _doorName:Array;
      
      public function MapProcess_666()
      {
         this._fun = [this.enterXuanwu,this.enterQinglong,this.enterBaihu,this.enterZhuque];
         this._stoneName = ["玄武","青龙","白虎","朱雀"];
         this._doorName = ["玄武传送阵","青龙传送阵","白虎传送阵","朱雀传送阵"];
         super();
      }
      
      override protected function init() : void
      {
         var i:int;
         SocketConnection.send(1022,86052288);
         i = 0;
         while(i < 4)
         {
            conLevel["stone_" + i].visible = false;
            conLevel["sptDoor_" + i].visible = false;
            i++;
         }
         conLevel["task816tig"].visible = false;
         conLevel["task_811_1"].visible = false;
         conLevel["bloodMc"].visible = false;
         Task816.initTaskForMap666(this);
         if(TasksManager.getTaskStatus(816) == TasksManager.ALR_ACCEPT)
         {
            TasksManager.getProStatusList(816,function(param1:Array):void
            {
               if(param1[0] && !param1[1] || param1[0] && param1[1] && !param1[2] || param1[0] && param1[1] && param1[2] && !param1[3] || param1[0] && param1[1] && param1[2] && param1[3] && !param1[4])
               {
                  return;
               }
               initStone();
            });
         }
         else
         {
            this.initStone();
         }
      }
      
      private function onExchangeEquipmentClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("UltraEvolutionCurseExchangePanel"),"正在加载...");
      }
      
      private function onEvolutionEquipmentClick(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("UltraEvolutionCurseEvolutionPanel"),"正在加载...");
      }
      
      private function initStone() : void
      {
         DisplayUtil.removeForParent(conLevel["ani_0"]);
         DisplayUtil.removeForParent(conLevel["ani_1"]);
         DisplayUtil.removeForParent(conLevel["ani_2"]);
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            ToolTipManager.add(conLevel["stone_" + _loc1_],this._stoneName[_loc1_]);
            conLevel["stone_" + _loc1_].visible = true;
            conLevel["stone_" + _loc1_].buttonMode = true;
            conLevel["stone_" + _loc1_].addEventListener(MouseEvent.CLICK,this.onStoneClick);
            ToolTipManager.add(conLevel["sptDoor_" + _loc1_],this._doorName[_loc1_]);
            conLevel["sptDoor_" + _loc1_].buttonMode = true;
            conLevel["sptDoor_" + _loc1_].addEventListener(MouseEvent.CLICK,this.onDoorClick);
            _loc1_++;
         }
      }
      
      private function onStoneClick(param1:MouseEvent) : void
      {
         var mc:MovieClip;
         var s:String;
         var e:MouseEvent = param1;
         var i:int = 0;
         while(i < 4)
         {
            conLevel["sptDoor_" + i].visible = false;
            i++;
         }
         mc = e.currentTarget as MovieClip;
         s = String(mc.name.split("_")[1]);
         conLevel["sptDoor_" + s].visible = true;
         AnimateManager.playMcAnimate(conLevel["sptDoor_" + s],0,"",function():void
         {
         });
      }
      
      private function onDoorClick(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         var _loc3_:Function = this._fun[uint(_loc2_.name.split("_")[1])];
         _loc3_();
      }
      
      private function enterXuanwu() : void
      {
         XuanWuController.check(this.checkTime());
      }
      
      private function enterQinglong() : void
      {
         QingLongController.check(this.checkTime());
      }
      
      private function enterBaihu() : void
      {
         BaiHuController.check(this.checkTime());
      }
      
      private function enterZhuque() : void
      {
         ZhuQueController.check(this.checkTime());
      }
      
      private function checkTime() : Boolean
      {
         if(SystemTimerManager.sysDate.getUTCHours() + 8 >= 12 && SystemTimerManager.sysDate.getUTCHours() + 8 <= 13)
         {
            return true;
         }
         return false;
      }
      
      private function startIntro() : void
      {
         conLevel["ani_0"].visible = false;
         conLevel["ani_1"].visible = false;
         conLevel["ani_2"].visible = false;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("zhuqueHuihe"),function():void
         {
            conLevel["ani_0"].visible = true;
            AnimateManager.playMcAnimate(conLevel["ani_0"],0,"",function():void
            {
               conLevel["ani_1"].visible = true;
               AnimateManager.playMcAnimate(conLevel["ani_1"],0,"",function():void
               {
                  NpcDialog.show(NPC.XUANWU,["菲尼克斯，为什么你这么快就苏醒了？记得万年前的上古之战，你伤的很重啊！"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.BAI_HU,["哼！我还没找你算账呢！万年前本来我可以战胜你的，没想到发生了那件事，可恶！"],["万年前？到底发生了什么……"],[function():void
                     {
                        NpcDialog.show(NPC.ZHUQUE,["我的伤还没好，不过我不得不停止疗伤。泰格尔，你冷静一些，现在不是说这个的时候，我想，有大事情要发生了！"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.QINGLONG,["朱雀，到底怎么了，我能感觉到你的能量波动有些紊乱，可是，为什么尚未痊愈的你，可以发出如此强大的能量？！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.ZHUQUE,["那场大战，本以为自己已经死了，却意外地领悟了浴火重生这个特性，我们朱雀一族，每一次重生，能力都会更上一层楼！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.BAI_HU,["又变强了？哼哼，好得很，来来来，我们再打一场！这次一定要决出胜负！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.ZHUQUE,["哎..你怎么还是这么暴躁，懒得理你。这次是真的有大事件发生了，我能感觉得到这股能量波动，虽然很微弱，不过我的感觉是不会错的，就是这股能量把我提前唤醒了！！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.QINGLONG,["什么！！！强大的能量波动？会是谁呢？"],null,null,false,function():void
                                       {
                                          NpcDialog.show(NPC.ZHUQUE,["目前还不清楚，不过万年前的那场上古大战，我曾经也感受到这股能量，看来事情比想象的严重……"],null,null,false,function():void
                                          {
                                             NpcDialog.show(NPC.XUANWU,["难道…算了，看来只有等待有缘人的出现，才可以度过这场危机，我们还是在这里等等吧……"],null,null,false,function():void
                                             {
                                                conLevel["ani_0"].visible = false;
                                                conLevel["ani_1"].visible = false;
                                                conLevel["ani_2"].visible = true;
                                                AnimateManager.playMcAnimate(conLevel["ani_2"],0,"",function():void
                                                {
                                                   var i:* = 0;
                                                   while(i < 4)
                                                   {
                                                      conLevel["stone_" + i].visible = true;
                                                      i++;
                                                   }
                                                   conLevel["ani_2"].visible = false;
                                                   NpcDialog.show(NPC.SEER,["这就是四大神兽吗？！好酷啊！没想到能见到他们聚集在一起！！！"],null,null,false,function():void
                                                   {
                                                      NpcDialog.show(NPC.SEER,["看来我得赶快通知一下我的朋友们，可以挑战四大神兽的机会可不多啊！"],null,null,false,function():void
                                                      {
                                                         BufferRecordManager.setState(MainManager.actorInfo,182,true,function():void
                                                         {
                                                            initStone();
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
                        });
                     }]);
                  });
               });
            });
         },false);
      }
      
      override public function destroy() : void
      {
         Task816.destroy();
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            ToolTipManager.remove(conLevel["stone_" + _loc1_]);
            conLevel["stone_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.onStoneClick);
            ToolTipManager.remove(conLevel["sptDoor_" + _loc1_]);
            conLevel["sptDoor_" + _loc1_].removeEventListener(MouseEvent.CLICK,this.onDoorClick);
            _loc1_++;
         }
         ToolBarController.showOrHideAllUser(true);
      }
   }
}
