package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.MapModel;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SpecAlert;
   import flash.events.MouseEvent;
   import org.taomee.utils.Utils;
   
   public class MapProcess_11743 extends BaseMapProcess
   {
       
      
      protected var _map:MapModel;
      
      protected var _step:int;
      
      protected var _hurtNum:int;
      
      public function MapProcess_11743()
      {
         super();
      }
      
      override protected function init() : void
      {
         super.init();
         ToolBarController.showOrHideAllUser(false);
         LevelManager.iconLevel.visible = false;
         ToolBarController.panel.visible = false;
         this._map = MapManager.currentMap;
         this._map.controlLevel.addEventListener(MouseEvent.CLICK,this.onMouseClick);
         this.update();
         StatManager.sendStat2014("1019丰收节庆典","进入翡翠山谷场景","2018运营活动");
      }
      
      protected function onMouseClick(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var event:MouseEvent = param1;
         var str:String = String(event.target.name);
         var index:int = int(str.split("_")[1]);
         var index1:int = int(event.target.parent.name.split("_")[1]);
         switch(str)
         {
            case "closeBtn":
               if(MainManager.actorInfo.mapID == 1)
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     MapManager.changeMapWithCallback(2,function():void
                     {
                        ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
                     });
                  });
               }
               else
               {
                  MapManager.changeMapWithCallback(1,function():void
                  {
                     ModuleManager.showModule(ClientConfig.getAppModule("HarvestFestivalCelebrationFeastMainPanel"),"正在打开....");
                  });
               }
               break;
            case "close":
               this.hideTipsMc();
               break;
            case "bossBtn":
               if(this._hurtNum == 0)
               {
                  NpcDialog.show(NPC.SEER,["你好，尊敬的努加达斯，我来自麦田村。现在是一年一度的丰收节，我向来您这里取一点翡翠石乳。"],["..."],[function():void
                  {
                     NpcDialog.show(1151,["又来了，又来了，这一年的时间咋就过的这么快呢？我一年也收获不了多少翡翠石乳，要不是当年的约定……"],["..."],[function():void
                     {
                        NpcDialog.show(NPC.SEER,["呃，当前的约定我不太清楚，您就按往年的量，照旧给我一份吧！"],["..."],[function():void
                        {
                           NpcDialog.show(1151,["好了，拿去……哎哟！"],["小心！"],[function():void
                           {
                              NpcDialog.show(1151,["嘶……好疼……"],["..."],[function():void
                              {
                                 NpcDialog.show(NPC.SEER,["啊呀，石乳洒掉了！这……您再给我一份呗？"],["..."],[function():void
                                 {
                                    NpcDialog.show(1151,["晦气，晦气！我存量本来就不多了，这下可全赔了！哼……当年约定，一年给一份。刚才这份已经给你了，你回去吧！"],["什么？这哪行？"],[function():void
                                    {
                                       NpcDialog.show(NPC.SEER,["石乳都洒了，你这份没给到我啊！您看我这没法交差了，您再给我一份吧！"],["不行！"],[function():void
                                       {
                                          NpcDialog.show(1151,["我说不给了，就是不给了，你走吧！"],["你……"],[function():void
                                          {
                                             showTipsMc();
                                          }],false,null,true);
                                       }],false,null,false);
                                    }],false,null,true);
                                 }],false,null,false);
                              }],false,null,true);
                           }],false,null,true);
                        }],false,null,false);
                     }],false,null,true);
                  }],false,null,false);
               }
               else
               {
                  this.showTipsMc();
               }
               break;
            case "fightBtn":
               this._map.controlLevel["tipsMc"].visible = false;
               FightManager.fightNoMapBoss("努加达斯",14390,false,true,function():void
               {
               });
               break;
            case "aKeyFightBtn":
               KTool.buyProductByCallback(254667,1,function():void
               {
                  KTool.socketSendCallBack(43304,function():void
                  {
                     update();
                  },[10,2]);
               });
               break;
            case "bagBtn":
               PetBagControllerNew.showByBuffer();
               break;
            case "cureBtn":
               if(MainManager.actorInfo.superNono)
               {
                  PetManager.cureAll();
               }
               else
               {
                  cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
                  if(cls.bonusType == 1)
                  {
                     PetManager.cureAll();
                  }
                  else
                  {
                     SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
                     {
                        PetManager.cureAll();
                     });
                  }
               }
         }
      }
      
      protected function showTipsMc() : void
      {
         this._map.controlLevel["tipsMc"].visible = true;
         KTool.hideMapAllPlayerAndMonster();
      }
      
      protected function hideTipsMc() : void
      {
         this._map.controlLevel["tipsMc"].visible = false;
         KTool.showMapAllPlayerAndMonster();
      }
      
      protected function update() : void
      {
         this.hideTipsMc();
         KTool.getMultiValue([104605,104607],function(param1:Array):void
         {
            var va:Array = param1;
            _step = va[0];
            _map.controlLevel["tipsMc"].numTx.text = va[1] + "/6000";
            _hurtNum = va[1];
            if(_step != 3)
            {
               if(_step == 4)
               {
                  NpcDialog.show(1151,["好吧好吧好吧，我服了你还不成！唉，这份给了你，我今年是真的没得用咯！"],["对不起……不过，谢谢你！"],[function():void
                  {
                     NpcDialog.show(NPC.SEER,["好了，可以回去交差了！"],["..."],[function():void
                     {
                        MapManager.changeMap(11741);
                     }],false,null,false);
                  }],false,null,true);
               }
            }
         });
      }
      
      override public function destroy() : void
      {
         NpcDialog.hide();
         ToolBarController.showOrHideAllUser(true);
         LevelManager.iconLevel.visible = true;
         ToolBarController.panel.visible = true;
         this._map.controlLevel.removeEventListener(MouseEvent.CLICK,this.onMouseClick);
         super.destroy();
      }
   }
}
