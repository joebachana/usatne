<?php

/**
 * @file
 * Contains \Drupal\inline_entity_form\Tests\InlineEntityFormTestBase.
 */

namespace Drupal\inline_entity_form\Tests;

use Drupal\simpletest\WebTestBase;

/**
 * Base Class for Inline Entity Form Tests.
 */
abstract class InlineEntityFormTestBase extends WebTestBase {

  /**
   * Gets IEF button name.
   *
   * @param array $xpath
   *   Xpath of the button.
   *
   * @return string
   *   The name of the button.
   */
  protected function getButtonName($xpath) {
    $retval = '';
    /** @var \SimpleXMLElement[] $elements */
    if ($elements = $this->xpath($xpath)) {
      foreach ($elements[0]->attributes() as $name => $value) {
        if ($name == 'name') {
          $retval = $value;
          break;
        }
      }
    }
    return $retval;
  }

  /**
   * Passes if no node is found for the title.
   *
   * @param $title
   *   Node title to check.
   * @param $message
   *   Message to display.
   */
  protected function assertNoNodeByTitle($title, $message = '') {
    if (!$message) {
      $message = "No node with title: $title";
    }
    $node = $this->getNodeByTitle($title);
    $this->assert('pass', "node = " . $node);

    $this->assertTrue(empty($node), $message);
  }

  /**
   * Passes if node is found for the title.
   *
   * @param $title
   *   Node title to check.
   * @param $message
   *   Message to display.
   */
  protected function assertNodeByTitle($title, $bundle = NULL, $message = '') {
    if (!$message) {
      $message = "Node with title found: $title";
    }
    $node = $this->getNodeByTitle($title);
    if ($this->assertTrue(!empty($node), $message)) {
      if ($bundle) {
        $this->assertEqual($node->bundle(), $bundle, "Node is correct bundle: $bundle");
      }
    }
  }

}
