package com.robot.app2.control
{
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.PlayTask;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.MovieClip;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class RayKingRoadController
   {
      
      private static var _sceneAnimation:MovieClip;
      
      private static var _playTask:PlayTask;
      
      private static var _storyQueueIndex:int = 0;
      
      private static var _curTaskModeType:uint = 0;
      
      private static var _storyIndex:int = 0;
      
      private static const CMD_LIST:Array = [41259];
      
      private static const FLAG_LIST:Array = [21,22,0,0,23];
      
      private static var _storySequece:Array = [["M_0_1","D_0_0","D_0_1","D_0_2","D_0_3","D_0_4","D_0_5","M_1_1144","D_1_0","D_1_1","D_1_2","D_1_3","M_2_1144","D_2_0","D_2_1","D_2_2"],["M_3_11239","D_3_0","D_3_1","D_3_2","D_3_3","D_3_4","D_3_5","D_3_6","D_3_7","D_3_8","D_3_9","D_3_10","M_4_11239","D_4_0","D_4_1","D_4_2","D_4_3","D_4_4","D_4_5","D_4_6","D_4_7"],["M_5_11239","D_5_0","D_5_1"],["M_6_11239","D_6_0","D_6_1","M_7_11239","D_7_0","D_7_1"],["M_8_11239","D_8_0","D_8_1","D_8_2","D_8_3"]];
      
      private static const _dialogContent:Array = [[[20,"赛尔",["悠悠，你这是怎么了？为什么突然变得这么慌张？"],[" "],[playMultiStory]],[337,"悠悠",["我感受到了一种元素的躁动，一定是有什么重要的事情要发生了……"],[" "],[playMultiStory]],[20,"赛尔",["重要的事情？是只有你才能感受到的变化吗？"],[" "],[playMultiStory]],[337,"悠悠",["不，那种迫近感来自于整个精灵界，你的其他精灵伙伴们也都感受到了。"],[" "],[playMultiStory]],[20,"悠悠",["我也无法确定这种情况是好是坏，但我可以确信，一场重大的风暴即将席卷精灵界，甚至可能会写入历史！"],[" "],[playMultiStory]],[20,"赛尔",["什么，这么夸张！既然如此，我去重生殿堂问问重生之翼大人，他一定也有所察觉。"],["我们走！"],[playMultiStory]]],[[20,"赛尔",["重生之翼大人！您好，我无意打扰您，但我有一个疑问想得到您的解答。"],[" "],[playMultiStory]],[2492,"重生之翼",["我想我知道你的来意。不过不要着急，很快，就会有一些跟你一样的人来到这里了。"],[" "],[playMultiStory]],[20,"赛尔",["咦？真的吗？"],[" "],[playMultiStory]],[2492,"重生之翼",["哈哈，你看，他们已经过来了。"],[" "],[playMultiStory]]],[[2492,"重生之翼",["不要急，朋友们。你们看，这里有一个跟你们一样着急的小朋友已经在问我了呢！"],[" "],[playMultiStory]],[2492,"重生之翼",["你们想知道答案的话，有一个地方你们一定要去。正好大家都在这里，大家便一起吧！"],[" "],[playMultiStory]],[2492,"重生之翼",["到了那里，你们便会明白究竟发生了什么了。"],["那我们快走吧！"],[completeStep]]],[[2492,"重生之翼",["朋友们，我们到了。"],[" "],[playMultiStory]],[2462,"艾恩斯",["好强烈的召唤感！似乎那种无处不在的元素干扰就是出自这里。"],[" "],[playMultiStory]],[2396,"柯尔德",["这里……是什么地方？"],[" "],[playMultiStory]],[2492,"重生之翼",["这里，是一处传承之地。早在你们接受前任精灵王的使命，成为新的精灵王之前，这里就已经存在了。"],[" "],[playMultiStory]],[2565,"斯嘉丽",["什么，想不到这里的来头这么大！能够引动整个精灵界的元素，这里究竟是谁的传承之地？"],[" "],[playMultiStory]],[2492,"重生之翼",["传说中，这份传承隶属于一位精灵王。当年他与一名强大的敌人大战，却遭遇了围攻，重伤垂死，狼狈而逃，至于此处。"],[" "],[playMultiStory]],[2492,"重生之翼",["它在生命的最后，将自己的传承封存于随身佩剑中。那把剑从此成为石剑，插在这里，多少个纪元，却从未有过变化，只等适合它的人出现……"],[" "],[playMultiStory]],[2462,"艾恩斯",["上古时期的精灵王！原来如此，吾等身为精灵王，彼此的元素会隐隐共鸣，但我却始终找不到几种元素的掌控者。"],[" "],[playMultiStory]],[2491,"凡尔斯",["没错。原来从上古时期，这些精灵王便断了传承……"],[" "],[playMultiStory]],[2492,"重生之翼",["如今它已经苏醒，想必它已相中了合适的传承者。只是不知道，究竟是哪个幸运的精灵，将会得到这份荣耀呢？"],[" "],[playMultiStory]],[2565,"斯嘉丽",["哎？小赛尔，你在做什么？"],["那我们快走吧！"],[playMultiStory]]],[[20,"赛尔",["哎哟！我只想试试，能不能把这把剑拔出来，说不定我也会成为机械系精灵王！"],[" "],[playMultiStory]],[2492,"重生之翼",["如果马尔修斯在这里，想必他已经切换成破坏型教育你了。你不用妄想拔出这把剑，它只会受到其传承者的影响。"],[" "],[playMultiStory]],[2492,"重生之翼",["现在几大精灵王均已出现，能够接受传承的一定是其他几种元素的精灵。这把剑已经在苏醒之中，我们需要引起它的共鸣，来确定接受传承的元素。"],[" "],[playMultiStory]],[2565,"斯嘉丽",["共鸣？我们需要使用元素的力量吗？"],[" "],[playMultiStory]],[2492,"重生之翼",["没错，你依然是那个聪明而强大的姑娘，斯嘉丽。我们需要使用尚未掌控的元素来刺激这把剑，从而快速缩小传承者的人选范围。"],[" "],[playMultiStory]],[2462,"艾恩斯",["很遗憾，重生之翼大人。虽然我们很愿意帮忙，但我们早已与自己的元素融为一体，怕是无法使用其他元素了。"],[" "],[playMultiStory]],[2491,"凡尔斯",["但是这里还有一个很多元的人……"],[" "],[playMultiStory]],[20,"赛尔",["唔……你们都看着我干啥？"],[" "],[completeStep]]],[[20,"赛尔",["哎呀！一点反应都没有！"],[" "],[playMultiStory]],[2492,"重生之翼",["看来不是这几种元素，再试试别的元素吧！"],["好！"],[dialogOver]]],[[20,"赛尔",["哎呀！怎么还是一点反应都没有！"],[" "],[playMultiStory]],[2492,"重生之翼",["看来这几种元素也不对，不过我们已经大大缩小了范围。不如试试电系的精灵吧！"],["好！"],[playMultiStory]]],[[20,"赛尔",["有反应了！石剑有反应了！"],[" "],[playMultiStory]],[2492,"重生之翼",["哈哈，原来是曾经的电系精灵王的传承！看来，要有一个电系的小家伙走运了！"],[" "],[playFullScreen]]],[[2492,"重生之翼",["既然这样，我们也算有了眉目。这把剑终于寻觅到了传承者，现在估计也很焦躁。"],[" "],[playMultiStory]],[2492,"重生之翼",["既然如此，我们不如帮它一把。大家可以把自己熟悉的电系精灵都找来，我们很快就能知道，究竟是谁将会获得传承了！"],[" "],[playMultiStory]],[20,"赛尔",["好主意！这可是万年难遇的盛事，想不到我在有生之年也会见证一次精灵王的诞生！天呐，我一定要把它记入我的航行日志里！"],[" "],[playMultiStory]],[20,"赛尔",["那么我这就去召集他们，重生之翼大人！我不会让您久等的！"],["好的，那就辛苦你了！"],[completeStep]]]];
       
      
      public function RayKingRoadController()
      {
         super();
      }
      
      public static function setup() : void
      {
         if(_sceneAnimation == null)
         {
            ResourceManager.getResource(ClientConfig.getMapAnimate("RaySpriteKingRoad"),function(param1:*):void
            {
               _sceneAnimation = param1;
               _sceneAnimation.visible = false;
            },"animation");
         }
      }
      
      public static function init() : void
      {
      }
      
      public static function playStory(param1:int) : void
      {
         _storyIndex = param1;
         _storyQueueIndex = 0;
         playMultiStory();
      }
      
      private static function playMultiStory() : void
      {
         var storyArr:Array;
         var paramArr:Array = _storySequece[_storyIndex][_storyQueueIndex].split("_");
         if(paramArr[0] == "M")
         {
            if(paramArr[2] != 0 && MapManager.currentMap.id != paramArr[2])
            {
               MapManager.changeMapWithCallback(paramArr[2],function callback():void
               {
                  playMultiStory();
               });
               return;
            }
         }
         if(_playTask == null)
         {
            _playTask = new PlayTask();
         }
         storyArr = getStoryArr(_storyIndex);
         ++_storyQueueIndex;
         if(storyArr.lenth <= 0)
         {
            ModuleManager.showAppModule("RaySpriteKingRoadPanel");
            return;
         }
         _playTask.addStory(storyArr);
         _playTask.playStory(function callBack():void
         {
            playMultiStory();
         });
      }
      
      private static function getStoryArr(param1:int) : Array
      {
         var _loc5_:Array = null;
         var _loc6_:TaskMod = null;
         var _loc2_:int = 0;
         var _loc3_:Array = new Array();
         var _loc4_:Array;
         if((_loc4_ = _storySequece[param1][_storyQueueIndex].split("_"))[0] == "M")
         {
            _curTaskModeType = TaskDiaLogManager.MAP_MOVIE;
            _sceneAnimation.visible = true;
            LevelManager.appLevel.addChild(_sceneAnimation);
            _loc3_.push(new TaskMod(_curTaskModeType,1,null,null,[_sceneAnimation,int(_loc4_[1]) + 1,"mc"]));
         }
         else if(_loc4_[0] == "D")
         {
            _curTaskModeType = TaskDiaLogManager.MULTI_ANSWER_DIALOG;
            _loc5_ = _dialogContent[int(_loc4_[1])][int(_loc4_[2])];
            (_loc6_ = new TaskMod(_curTaskModeType,uint(_loc5_[0]),_loc5_[2],_loc5_[3],null,_loc5_[4])).isNewDialog_1 = true;
            _loc3_.push(_loc6_);
         }
         return _loc3_;
      }
      
      private static function completeStep() : void
      {
         destroy();
         SocketConnection.sendWithCallback(CMD_LIST[0],function():void
         {
            ModuleManager.showAppModule("RaySpriteKingRoadPanel");
         },FLAG_LIST[_storyIndex]);
      }
      
      private static function dialogOver() : void
      {
         destroy();
         ModuleManager.showAppModule("WakenStoneSwordPanel");
      }
      
      private static function playFullScreen() : void
      {
         AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("RaySpriteKingRoadFullScreen"),function():void
         {
            playStory(4);
         });
      }
      
      public static function destroy() : void
      {
         if(_sceneAnimation)
         {
            DisplayUtil.removeForParent(_sceneAnimation);
            _sceneAnimation = null;
         }
      }
   }
}
