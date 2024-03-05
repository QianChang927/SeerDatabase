package com.robot.app2.control
{
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class LightBaptismContorller
   {
      
      private static var BUFFER_ID:uint = 1276;
       
      
      public function LightBaptismContorller()
      {
         super();
      }
      
      public static function setUp() : void
      {
         if(!isTaskDone)
         {
            palyAnim(true);
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("LightBaptismMainPanel"),"正在打开....");
         }
      }
      
      public static function palyAnim(param1:Boolean = false) : void
      {
         var isByEquit:Boolean = param1;
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("task_LightBaptism"),function():void
         {
            NpcDialog.show(NPC.SAIXIAOXI,["那个黑影是什么来历，为什么米咔很害怕的样子？"],null,null,false,function():void
            {
               NpcDialog.show(NPC.SHENGMAIERSI,["看起来你还不知道，米咔、佐伊和妮可本来就是属于新星域的精灵。"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.SAIXIAOXI,["什么？怎么会？米咔从来没对我说过。"],null,null,false,function():void
                  {
                     NpcDialog.show(NPC.SHENGMAIERSI,["穿越星际之门对弱小的精灵而言是巨大的考验，可能它们在穿越的时候丧失了记忆！"],null,null,false,function():void
                     {
                        NpcDialog.show(NPC.SAIXIAOXI,["现在看起来它想起了什么。"],null,null,false,function():void
                        {
                           NpcDialog.show(NPC.SHENGMAIERSI,["现在星际之门的开启还不完整，但是刚才那个邪恶的气息已经探测到了米咔它们。"],null,null,false,function():void
                           {
                              NpcDialog.show(NPC.SAIXIAOXI,["罗杰船长警告过我们星际之门的另一边是更多的危险和挑战，没想到危险来的这么快！"],null,null,false,function():void
                              {
                                 NpcDialog.show(NPC.PUNI,["强大的敌人既是威胁也是机会，米咔它们拥有强大的潜能，只要勇敢面对，就能超越自己！"],null,null,false,function():void
                                 {
                                    NpcDialog.show(NPC.SHENGMAIERSI,["就让我们三大圣灵系强者来帮助它们吧，只要经过我们圣灵系力量的洗礼，一定可以把它们的潜力激发出来！"],null,null,false,function():void
                                    {
                                       NpcDialog.show(NPC.PUNI,["做好准备，接下来将是一场空前绝后的特训，你们将在米咔、佐伊和妮可身上，第一次见识到新星域精灵与众不同的强大异能。"],null,null,false,function():void
                                       {
                                          if(isByEquit)
                                          {
                                             BufferRecordManager.setMyState(BUFFER_ID,true,function():void
                                             {
                                                openPanel();
                                             });
                                          }
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
      
      private static function openPanel() : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LightBaptismGiftedLargeReadyPanel"),"正在打开....");
      }
      
      private static function get isTaskDone() : Boolean
      {
         return BufferRecordManager.getMyState(BUFFER_ID);
      }
   }
}
