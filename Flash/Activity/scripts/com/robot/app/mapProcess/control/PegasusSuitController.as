package com.robot.app.mapProcess.control
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   
   public class PegasusSuitController
   {
      
      private static var _map:BaseMapProcess;
      
      public static var wear:uint;
       
      
      public function PegasusSuitController()
      {
         super();
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         _map = map;
         if(!isFinishTask)
         {
            NpcDialog.show(NPC.SOLIDMAN,["大新闻啦大新闻！小赛尔，你可听好了，我都不敢大声说的，这可是史无前例的重大消息啊！"],["什么消息？说来听听"],[function():void
            {
               NpcDialog.show(NPC.SOLIDMAN,["我们的飞船在恶魔星上发现了一种神秘的矿产，从那里开采出来的矿石有一种神秘的力量，研发小组努力研究了很长时间，都没有彻底开发出它的功能。"],["恶魔星上还有这种矿石吗？"],[function():void
               {
                  NpcDialog.show(NPC.SOLIDMAN,["我们把这种矿石命名为恶魔印记，终于在不久前恶魔印记成功开发出来了，现在用恶魔印记可以打造一些珍稀的套装了！很惊喜吧？ "],["虽然很惊喜，不过还没重大到史无前例的水平吧"],[function():void
                  {
                     NpcDialog.show(NPC.SOLIDMAN,["当然这还不算完，赛尔豆现在可以洗练精灵个体啦！借由这种恶魔印记的力量，一种全新的精灵洗练器横空出世了，用赛尔豆就可以洗练出更强的精灵啦！ "],["精灵洗练器？不是已经有了精灵修炼器了吗？"],[function():void
                     {
                        NpcDialog.show(NPC.SOLIDMAN,["精灵洗练器是用恶魔印记的能量全新开发的新装置，无需等待时间，没有洗练次数限制，随心所欲的洗练精灵！ "],["这这这…也太强了吧"],[function():void
                        {
                           NpcDialog.show(NPC.SOLIDMAN,["只不过现在这种能量不稳定，必须穿上指定工作服才能防止能量的辐射，而且辐射场每天都会变化，每天可能都需要换不同的工作服才可以使用精灵洗练器！ "],["快让我去看看吧！"],[function():void
                           {
                              isFinishTask = true;
                              _map.depthLevel["guard2"].visible = false;
                              ModuleManager.showModule(ClientConfig.getAppModule("PegasusMainPanel"),"正在打开...");
                           }]);
                        }]);
                     }]);
                  }]);
               }]);
            }]);
         }
      }
      
      public static function get isFinishTask() : Boolean
      {
         return BufferRecordManager.getState(MainManager.actorInfo,408);
      }
      
      public static function set isFinishTask(param1:Boolean) : void
      {
         BufferRecordManager.setState(MainManager.actorInfo,408,param1);
      }
   }
}
