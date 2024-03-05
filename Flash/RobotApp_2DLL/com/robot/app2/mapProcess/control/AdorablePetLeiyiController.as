package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class AdorablePetLeiyiController
   {
      
      private static var _npc:MovieClip;
       
      
      public function AdorablePetLeiyiController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _npc = param1.btnLevel["btnLeixiaoyi"];
         _npc.buttonMode = true;
         CommonUI.addYellowExcal(_npc,0,-173.4);
         _npc.addEventListener(MouseEvent.CLICK,onClickNpc);
      }
      
      protected static function onClickNpc(param1:MouseEvent) : void
      {
         var event:MouseEvent = param1;
         StatManager.sendStat2014("0828萌宠第八弹","点击雷小伊NPC",StatManager.RUN_ACT_2015);
         KTool.getMultiValue([6462],function(param1:Array):void
         {
            var values:Array = param1;
            if(values[0] == 0)
            {
               if(BitBuffSetClass.getState(22854))
               {
                  openTalismanPanel();
               }
               else
               {
                  playAnim1();
               }
            }
            else if(values[0] == 1)
            {
               if(BitBuffSetClass.getState(22855))
               {
                  virtualFight();
               }
               else
               {
                  playAnim2();
               }
            }
            else if(values[0] == 2)
            {
               if(BitBuffSetClass.getState(22856))
               {
                  openMaintainJusticePanel();
               }
               else
               {
                  playAnim3();
               }
            }
            else if(values[0] == 3)
            {
               openBrotherWarPanel();
            }
            else if(values[0] == 4)
            {
               KTool.getBitSet([185],function(param1:Array):void
               {
                  if(param1[0] > 0)
                  {
                     NpcDialog.show(NPC.LEI_XIAO_YI,["我一定会成长起来，超越雷锘哥哥！"]);
                  }
                  else
                  {
                     openBrotherWarPanel();
                  }
               });
            }
         });
      }
      
      public static function playAnim1(param1:Function = null) : void
      {
         var callBack:Function = param1;
         ResourceManager.getResource(ClientConfig.getMapAnimate("adorable_pet_leinuo"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            KTool.hideMapAllPlayerAndMonster();
            ToolBarController.panel.hide();
            ToolBarController.showOrHideAllUser(false);
            LevelManager.iconLevel.visible = false;
            MapManager.currentMap.controlLevel.addChild(mc);
            MapObjectControl.hideOrShowAllObjects(false);
            _npc.visible = false;
            AnimateManager.playMcAnimate(mc,1,"mc",function():void
            {
               KTool.showMapAllPlayerAndMonster();
               ToolBarController.panel.show();
               ToolBarController.showOrHideAllUser(true);
               LevelManager.iconLevel.visible = true;
               DisplayUtil.removeForParent(mc);
               MapObjectControl.hideOrShowAllObjects(true);
               BitBuffSetClass.setState(22854,1);
               _npc.visible = true;
               openTalismanPanel();
            });
         });
      }
      
      private static function openTalismanPanel() : void
      {
         ModuleManager.showAppModule("AdorablePetTalismanPanel");
      }
      
      public static function playAnim2() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("adorable_pet_leinuo"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            KTool.hideMapAllPlayerAndMonster();
            ToolBarController.panel.hide();
            ToolBarController.showOrHideAllUser(false);
            LevelManager.iconLevel.visible = false;
            MapManager.currentMap.controlLevel.addChild(mc);
            MapObjectControl.hideOrShowAllObjects(false);
            _npc.visible = false;
            AnimateManager.playMcAnimate(mc,2,"mc",function():void
            {
               KTool.showMapAllPlayerAndMonster();
               ToolBarController.panel.show();
               ToolBarController.showOrHideAllUser(true);
               LevelManager.iconLevel.visible = true;
               DisplayUtil.removeForParent(mc);
               MapObjectControl.hideOrShowAllObjects(true);
               _npc.visible = true;
               virtualFight();
               BitBuffSetClass.setState(22855,1);
            });
         });
      }
      
      public static function virtualFight() : void
      {
         var onFight:Function = null;
         onFight = function(param1:*):void
         {
            FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,onFight);
            playAnim3();
         };
         var bid:int = 0;
         var bname:String = "";
         FightManager.tryFight(259,[0,0,0,0,0]);
         FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,onFight);
      }
      
      public static function playAnim3() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("adorable_pet_leinuo"),function(param1:MovieClip):void
         {
            var mc:MovieClip = param1;
            KTool.hideMapAllPlayerAndMonster();
            ToolBarController.panel.hide();
            ToolBarController.showOrHideAllUser(false);
            LevelManager.iconLevel.visible = false;
            MapManager.currentMap.controlLevel.addChild(mc);
            MapObjectControl.hideOrShowAllObjects(false);
            _npc.visible = false;
            AnimateManager.playMcAnimate(mc,3,"mc",function():void
            {
               NpcDialog.show(NPC.LEIXIAONUO,["咦？这不是我的雷神护符吗？"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.LEIXIAONUO,["不对，我的护符还在身上……哦，我懂了……"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.LEIXIAONUO,["你不会以为，雷神护符是我力量的源泉吧？"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.LEI_XIAO_YI,["不然呢？你为什么这么强？"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.LEIXIAONUO,["傻弟弟呀傻弟弟，我在你这么大的时候，可是已经去和坏蛋作斗争了呀！"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.LEIXIAONUO,["越是帮助无辜的大家，我越是觉得，一定要坚持正义，将邪恶力量从赫尔卡星驱逐出去！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.LEIXIAONUO,["从此，我在战斗中越来越勇敢，我的力量也越来越强大。每当我对着恶势力挥起拳头时，只要想起受害精灵们那些绝望无助的眼神，我都觉得自己有着使不完的力气！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.LEIXIAONUO,["你要记住，我们雷神的力量，来源于我们的正义之心！"],null,null,false,function():void
                                    {
                                       KTool.showMapAllPlayerAndMonster();
                                       ToolBarController.panel.show();
                                       ToolBarController.showOrHideAllUser(true);
                                       LevelManager.iconLevel.visible = true;
                                       DisplayUtil.removeForParent(mc);
                                       MapObjectControl.hideOrShowAllObjects(true);
                                       _npc.visible = true;
                                       BitBuffSetClass.setState(22856,1);
                                       openMaintainJusticePanel();
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
      
      public static function openMaintainJusticePanel() : void
      {
         ModuleManager.showAppModule("MaintainJusticePanel");
      }
      
      public static function openBrotherWarPanel() : void
      {
         ModuleManager.showAppModule("BrotherWarPanel");
      }
      
      public static function destroy() : void
      {
         _npc = null;
      }
   }
}
